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
    AnimeModalContainer,
    AnimeModalImage,
    AnimeModalTitle,
    AnimeModalInfos,
    EditModalDiv,
} from './styles';
import { useState, useEffect } from 'react';
import { Pencil } from '@phosphor-icons/react';
import { AnimeData } from '../../../interfaces/animes';
import { Modal } from '../../../components/Modal';

interface IAnimeData {
    isModalOpen: boolean;
    animeData: AnimeData | {};
}

export const Home = () => {
    const [animeData, setAnimeData] = useState<IAnimeData>({
        isModalOpen: false,
        animeData: {},
    });
    const [animeList, setAnimeList] = useState<AnimeData[]>();
    const [searchFilter, setSearchFilter] = useState<string>('');
    const { state } = useLocation();

    const handleChangeFilter = (animeName: string) => {
        return setSearchFilter(animeName);
    };

    const handleChangeModalStatus = (animeInfos?: AnimeData) => {
        setAnimeData({
            isModalOpen: !animeData.isModalOpen,
            animeData: animeInfos || {},
        });
    };

    useEffect(() => {
        setAnimeList(
            state.animes.filter((anime: AnimeData) =>
                anime.title.toLocaleLowerCase().includes(searchFilter)
            )
        );
    }, [searchFilter, state]);

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

            <Modal
                title="Informações"
                isOpen={animeData.isModalOpen}
                closeModal={handleChangeModalStatus}
            >
                <AnimeModalContainer>
                    <>
                        <AnimeModalImage
                            src={
                                animeData.animeData?.photo ||
                                'https://defeatzone.com/wp-content/uploads/2023/09/a.png'
                            }
                            alt="anime photo"
                        />
                    </>

                    <AnimeModalInfos>
                        <AnimeModalTitle>
                            Título:{' '}
                            <strong>
                                {animeData.animeData?.title || 'Nome padrão'}
                            </strong>
                        </AnimeModalTitle>

                        <AnimeModalTitle>
                            Temporada:{' '}
                            <strong>
                                {animeData.animeData?.season ||
                                    'Temporada Atual'}
                            </strong>
                        </AnimeModalTitle>

                        <AnimeModalTitle>
                            Dia de exibição:{' '}
                            <strong>
                                {animeData.animeData?.dayOfWeek ||
                                    'Dia aleatorio'}
                            </strong>
                        </AnimeModalTitle>

                        <AnimeModalTitle>
                            Episódios assistidos:{' '}
                            <strong>
                                {animeData.animeData?.episodesWatched ||
                                    'Quantidade aleatoria'}
                            </strong>
                        </AnimeModalTitle>

                        <AnimeModalTitle>
                            Última exibição:{' '}
                            <strong>
                                {animeData.animeData?.lastDayWatched ||
                                    'Data aleatorio'}
                            </strong>
                        </AnimeModalTitle>

                        <AnimeModalTitle>
                            Progresso:{' '}
                            <strong>
                                {animeData.animeData?.progress || 'Progresso'}
                            </strong>
                        </AnimeModalTitle>

                        <EditModalDiv>
                            <Pencil size={25} color="#210303" weight="bold" />
                        </EditModalDiv>
                    </AnimeModalInfos>
                </AnimeModalContainer>
            </Modal>
        </>
    );
};
