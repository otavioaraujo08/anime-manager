import { AnimeData } from '../../../../interfaces/animes';

interface AnimesByProgressProps {
    animeList: AnimeData[];
}

export const AnimesByProgress = ({ animeList }: AnimesByProgressProps) => {
    console.log(animeList);

    return (
        <>
            <h1>ola</h1>
            <p>mundo</p>
        </>
    );
};
