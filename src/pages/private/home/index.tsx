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
import { AnimeData } from '../../../interfaces/animes';

export const Home = () => {
    const [animeList, setAnimeList] = useState<AnimeData[]>();
    const [searchFilter, setSearchFilter] = useState<string>('');
    const { state } = useLocation();

    const handleChangeFilter = (animeName: string) => {
        return setSearchFilter(animeName);
    };

    useEffect(() => {
        setAnimeList(
            state.animes.filter((anime: AnimeData) =>
                anime.title.toLocaleLowerCase().includes(searchFilter)
            )
        );
    }, [searchFilter, state]);

    return (
        <Container>
            <Header>
                <GenericTitle>
                    Seja bem vindo <strong>{state?.name || 'Usuário X'}</strong>
                </GenericTitle>

                <Textfield
                    placeholder="Pesquise pelo nome do anime aqui..."
                    onChange={(event) => handleChangeFilter(event.target.value)}
                />
            </Header>

            <Body>
                <GenericSubtitle>Animes</GenericSubtitle>

                <AnimesBox>
                    {animeList?.map((anime: AnimeData) => (
                        <AnimeBox key={anime.id}>
                            <AnimeImage src={anime.photo} alt={anime.title} />
                            <AnimeTitle>{anime.title}</AnimeTitle>
                            <AnimeSubtitle>{anime.progress}</AnimeSubtitle>
                        </AnimeBox>
                    ))}
                </AnimesBox>
            </Body>
        </Container>
    );
};
