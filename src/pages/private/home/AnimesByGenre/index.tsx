import { AnimeData } from 'interfaces/animes';
import styled from 'styled-components';
import { AnimesByProgress } from './AnimesByProgress';

export const AnimeByGenreBox = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

interface AnimesByGenreProps {
    animeList: AnimeData[];
}

export const AnimesByGenre = ({ animeList }: AnimesByGenreProps) => {
    return (
        <AnimeByGenreBox>
            <AnimesByProgress animeList={animeList} progress="Não iniciado" />

            <AnimesByProgress animeList={animeList} progress="Em andamento" />

            <AnimesByProgress animeList={animeList} progress="Pausado" />

            <AnimesByProgress animeList={animeList} progress="Completo" />
        </AnimeByGenreBox>
    );
};
