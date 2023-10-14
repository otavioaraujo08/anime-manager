import { AnimeData } from '../../../../interfaces/animes';
import {
    AnimeDiv,
    AnimesDiv,
    AnimeImage,
    AnimeInfo,
    Container,
    Label,
    Title,
} from './styles';

interface AnimesByProgressProps {
    progress: 'Não iniciado' | 'Em andamento' | 'Pausado' | 'Completo';
    animeList: AnimeData[];
}

export const AnimesByProgress = ({
    progress,
    animeList,
}: AnimesByProgressProps) => {
    const filteredAnimeList = animeList.filter(
        (anime) => anime.progress === progress
    );

    return filteredAnimeList.length ? (
        <Container>
            <Title>
                Animes ordenados p/ progresso: <strong>{progress}</strong>
            </Title>

            <AnimesDiv>
                {filteredAnimeList.map((anime) => (
                    <AnimeDiv key={anime.id}>
                        <AnimeImage alt={anime.title} src={anime.photo} />

                        <div>
                            <Label>Título:</Label>
                            <AnimeInfo>{anime.title}</AnimeInfo>

                            <Label>Dia da semana:</Label>
                            <AnimeInfo>{anime.dayOfWeek}</AnimeInfo>

                            <Label>Episódios concluídos:</Label>
                            <AnimeInfo>{anime.episodesWatched}</AnimeInfo>

                            <Label>Último dia concluído:</Label>
                            <AnimeInfo>{anime.lastDayWatched}</AnimeInfo>
                        </div>
                    </AnimeDiv>
                ))}
            </AnimesDiv>
        </Container>
    ) : null;
};
