import { AnimeData } from '../../../../../interfaces/animes';
import {
    AnimeDiv,
    AnimesDiv,
    AnimeImage,
    AnimeInfo,
    Container,
    Label,
    Title,
    AnimeImageDiv,
    AnimeTitleDiv,
    AnimeDayOfWeekDiv,
    AnimeEpisodesConcludedDiv,
    AnimeLastExibitionDiv,
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
                        <AnimeImageDiv>
                            <AnimeImage alt={anime.title} src={anime.photo} />
                        </AnimeImageDiv>

                        <AnimeTitleDiv>
                            <Label>Título:</Label>
                            <AnimeInfo>{anime.title}</AnimeInfo>
                        </AnimeTitleDiv>

                        <AnimeDayOfWeekDiv>
                            <Label>Dia da semana:</Label>
                            <AnimeInfo>{anime.dayOfWeek}</AnimeInfo>
                        </AnimeDayOfWeekDiv>

                        <AnimeEpisodesConcludedDiv>
                            <Label>Episódios concluídos:</Label>
                            <AnimeInfo>{anime.episodesWatched}</AnimeInfo>
                        </AnimeEpisodesConcludedDiv>

                        <AnimeLastExibitionDiv>
                            <Label>Último dia concluído:</Label>
                            <AnimeInfo>{anime.lastDayWatched}</AnimeInfo>
                        </AnimeLastExibitionDiv>
                    </AnimeDiv>
                ))}
            </AnimesDiv>
        </Container>
    ) : null;
};
