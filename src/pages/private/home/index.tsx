import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container,
    GenericTitle,
    GenericSubtitle,
    Header,
    Textfield,
    Body,
    AnimesBox,
    AnimeImage,
    AnimeBox,
    AnimeTitle,
    AnimeSubtitle,
    BodyWithoutAnimes,
    ButtonAddAnimes,
    LogoImage,
    AnimeByGenreBox,
} from './styles';
import { useState, useEffect } from 'react';
import { AnimeModal } from './AnimeModal';
import { animeService } from '../../../services/anime';
import { AnimeData } from '../../../interfaces/animes';
import { EditAnimeModal } from './EditAnimeModal';
import { FloatButton } from '../../../components/FloatButton';
import logo from '../../../assets/logo.png';
import { Plus } from '@phosphor-icons/react';
import { AnimesByProgress } from './AnimesByProgress';

interface IAnimeData {
    isModalOpen: boolean;
    animeData: AnimeData;
}

export const Home = () => {
    const [animeData, setAnimeData] = useState<IAnimeData>({
        isModalOpen: false,
        animeData: {
            id: 1,
            title: '',
            dayOfWeek: '',
            episodesWatched: 1,
            lastDayWatched: '',
            photo: '',
            progress: '',
            season: '',
            userId: 1,
        },
    });
    const [modalEditInfo, setModalEditInfo] = useState({
        isModalOpen: false,
        id: 0,
    });
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

    const handleChangeModalViewStatus = (animeInfos: AnimeData) => {
        setAnimeData({
            isModalOpen: !animeData.isModalOpen,
            animeData: animeInfos,
        });
    };

    const handleCloseViewModal = () => {
        setAnimeData({
            isModalOpen: false,
            animeData: {
                id: 1,
                title: '',
                dayOfWeek: '',
                episodesWatched: 1,
                lastDayWatched: '',
                photo: '',
                progress: '',
                season: '',
                userId: 1,
            },
        });
    };

    const handleOpenEditModal = (id: number) => {
        setModalEditInfo({
            isModalOpen: true,
            id,
        });
    };

    const handleCloseEditModal = () => {
        handleCloseViewModal();

        setModalEditInfo({
            id: 0,
            isModalOpen: false,
        });
    };

    const handleRedirectPage = () => {
        navigate('/create-anime-info', {
            state: state,
        });
    };

    const handleGetAnimesData = async () => {
        try {
            const response = await animeService.getAnimesInfo({
                userId: state.id,
            });

            setAnimeListOriginal(response);
        } catch (error: any) {
            alert(error.message);
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
                    {animeList?.length ? (
                        <>
                            <div
                                style={{
                                    padding: '0 2rem',
                                }}
                            >
                                <GenericSubtitle>
                                    Todos os animes
                                </GenericSubtitle>

                                <AnimesBox>
                                    {animeList?.map((anime: AnimeData) => {
                                        const today =
                                            anime.dayOfWeek.toLowerCase();

                                        return (
                                            <AnimeBox
                                                key={anime.id}
                                                onClick={() =>
                                                    handleChangeModalViewStatus(
                                                        anime
                                                    )
                                                }
                                            >
                                                <AnimeImage
                                                    src={anime.photo}
                                                    alt={anime.title}
                                                    loading="lazy"
                                                />

                                                <AnimeTitle
                                                    $today={dayOfWeek.includes(
                                                        today
                                                    )}
                                                >
                                                    {anime.title}
                                                </AnimeTitle>
                                                <AnimeSubtitle
                                                    $today={dayOfWeek.includes(
                                                        today
                                                    )}
                                                >
                                                    {anime.progress}
                                                </AnimeSubtitle>
                                            </AnimeBox>
                                        );
                                    })}
                                </AnimesBox>

                                <FloatButton onClick={handleRedirectPage}>
                                    <Plus
                                        size={30}
                                        color="#c4c4c4"
                                        weight="bold"
                                    />
                                </FloatButton>
                            </div>

                            <AnimeByGenreBox>
                                <AnimesByProgress
                                    animeList={animeList}
                                    progress="Não iniciado"
                                />

                                <AnimesByProgress
                                    animeList={animeList}
                                    progress="Em andamento"
                                />

                                <AnimesByProgress
                                    animeList={animeList}
                                    progress="Pausado"
                                />

                                <AnimesByProgress
                                    animeList={animeList}
                                    progress="Completo"
                                />
                            </AnimeByGenreBox>
                        </>
                    ) : (
                        <BodyWithoutAnimes>
                            <GenericSubtitle>
                                Você não possui animes no momento, deseja
                                adicionar ?
                            </GenericSubtitle>

                            <ButtonAddAnimes onClick={handleRedirectPage}>
                                Adicionar anime
                            </ButtonAddAnimes>
                        </BodyWithoutAnimes>
                    )}
                </Body>
            </Container>

            {!modalEditInfo.isModalOpen && (
                <AnimeModal
                    isOpen={animeData.isModalOpen}
                    animeData={animeData.animeData}
                    closeModal={handleCloseViewModal}
                    openEditModal={handleOpenEditModal}
                />
            )}

            <EditAnimeModal
                isOpen={modalEditInfo.isModalOpen}
                closeModal={handleCloseEditModal}
                id={modalEditInfo.id}
                userId={state.id}
                reload={handleGetAnimesData}
            />
        </>
    );
};
