import { useLocation } from 'react-router-dom';
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
} from './styles';
import { useState, useEffect } from 'react';
import { AnimeModal } from './AnimeModal';
import { animeService } from '../../../services/anime';
import { AnimeData } from '../../../interfaces/animes';

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
    const [animeListOriginal, setAnimeListOriginal] = useState<AnimeData[]>();
    const [animeList, setAnimeList] = useState<AnimeData[]>();
    const [searchFilter, setSearchFilter] = useState<string>('');
    const { state } = useLocation();

    const handleChangeFilter = (animeName: string) => {
        return setSearchFilter(animeName);
    };

    const handleChangeModalStatus = (animeInfos: AnimeData) => {
        setAnimeData({
            isModalOpen: !animeData.isModalOpen,
            animeData: animeInfos,
        });
    };

    const handleCloseModal = () => {
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

    useEffect(() => {
        const handleGetAnimesData = async () => {
            try {
                const response = await animeService.getAnimesInfo(state.id);

                setAnimeListOriginal(response);
            } catch (error: any) {
                alert(error.message);
            }
        };

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
                    <GenericTitle>
                        Seja bem vindo{' '}
                        <strong>{state?.name || 'Usuário X'}</strong>
                    </GenericTitle>

                    <Textfield
                        placeholder="Pesquise pelo nome do anime aqui..."
                        onChange={(event) =>
                            handleChangeFilter(event.target.value)
                        }
                    />
                </Header>

                <Body>
                    <GenericSubtitle>Animes</GenericSubtitle>

                    <AnimesBox>
                        {animeList?.map((anime: AnimeData) => (
                            <AnimeBox
                                key={anime.id}
                                onClick={() => handleChangeModalStatus(anime)}
                            >
                                <AnimeImage
                                    src={anime.photo}
                                    alt={anime.title}
                                    loading="lazy"
                                />

                                <AnimeTitle>{anime.title}</AnimeTitle>
                                <AnimeSubtitle>{anime.progress}</AnimeSubtitle>
                            </AnimeBox>
                        ))}
                    </AnimesBox>
                </Body>
            </Container>

            <AnimeModal
                isOpen={animeData.isModalOpen}
                animeData={animeData.animeData}
                closeModal={handleCloseModal}
            />
        </>
    );
};
