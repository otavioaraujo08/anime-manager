import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container,
    GenericTitle,
    Header,
    Textfield,
    Body,
    AnimesBox,
    LogoImage,
    AnimeTable,
} from './styles';
import { useState, useEffect } from 'react';
import { Plus } from '@phosphor-icons/react';
import { Title } from '@components/Title';
import showPopup from '@utils/showPopup';
import { AnimeData } from '@interfaces/animes';
import { animeService } from '@services/anime';
import logo from '@assets/logo.png';
import { TodayAnimes } from './TodayAnimes';
import { AnimeCard } from './AnimeCard';
import { AnimesByGenre } from './AnimesByGenre';
import { FloatButton } from '@components/FloatButton';
import { NoAnimeDiv } from './NoAnimeDiv';

export const Home = () => {
    const [animeListOriginal, setAnimeListOriginal] = useState<AnimeData[]>();
    const [animeList, setAnimeList] = useState<AnimeData[]>();
    const [searchFilter, setSearchFilter] = useState<string>('');

    const navigate = useNavigate();
    const { state } = useLocation();
    const dayOfWeek = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long',
    });

    const handleChangeFilter = (animeName: string) => {
        return setSearchFilter(animeName);
    };

    const handleRedirectPage = () => {
        navigate('/create-anime-info', {
            state: state,
        });
    };

    const handleGetAnimesData = async () => {
        try {
            const response = await animeService.getAnimesInfo({
                userId: state._id,
            });

            return setAnimeListOriginal(response);
        } catch (error: any) {
            return showPopup({
                message: 'Nenhum anime encontrado !',
                type: 'warning',
            });
        }
    };

    useEffect(() => {
        handleGetAnimesData();
    }, [state]);

    useEffect(() => {
        if (searchFilter) {
            const filteredAnimeList = animeListOriginal?.filter(
                (anime: AnimeData) =>
                    anime.title
                        .toLocaleLowerCase()
                        .includes(searchFilter.toLowerCase())
            );

            setAnimeList(filteredAnimeList);
        } else {
            setAnimeList(animeListOriginal);
        }
    }, [searchFilter, animeListOriginal]);

    return (
        <>
            <Container>
                <Header>
                    <div>
                        <LogoImage src={logo} alt="sharingan" />

                        <GenericTitle>AniManager</GenericTitle>
                    </div>

                    <Textfield
                        placeholder="Pesquise pelo nome do anime aqui..."
                        onChange={(event) =>
                            handleChangeFilter(event.target.value)
                        }
                    />
                </Header>

                <Body>
                    {animeListOriginal?.length ? (
                        <>
                            <AnimeTable>
                                <TodayAnimes
                                    animeList={animeListOriginal.filter(
                                        (anime) => {
                                            return (
                                                dayOfWeek.includes(
                                                    anime.dayOfWeek.toLowerCase()
                                                ) &&
                                                anime.progress !== 'Completo'
                                            );
                                        }
                                    )}
                                />
                            </AnimeTable>

                            <AnimeTable>
                                <AnimesBox>
                                    <Title title="Anime ainda em execução" />

                                    <AnimeCard
                                        list={animeList?.filter(
                                            (anime) =>
                                                anime.progress ===
                                                'Em andamento'
                                        )}
                                    />
                                </AnimesBox>
                            </AnimeTable>

                            <AnimesByGenre animeList={animeListOriginal} />

                            <AnimeTable>
                                <AnimesBox>
                                    <Title title="Todos os animes" />

                                    <AnimeCard list={animeList} />
                                </AnimesBox>
                            </AnimeTable>

                            <FloatButton onClick={handleRedirectPage}>
                                <Plus size={30} color="#c4c4c4" weight="bold" />
                            </FloatButton>
                        </>
                    ) : (
                        <NoAnimeDiv state={state} />
                    )}
                </Body>
            </Container>
        </>
    );
};
