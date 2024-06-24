import { useLocation } from 'react-router-dom';
import {
    AnimeBoxContent,
    AnimeBoxHeader,
    AnimeBoxContainer,
    AnimeImage,
    BoxContentImage,
    HeaderText,
    AnimeInfos,
} from './styles';
import { useState } from 'react';
import { AnimeData } from '@interfaces/animes';
import { AnimeView } from './AnimeView';
import { AnimeEdit } from './AnimeEdit';

export const AnimePage = () => {
    const { state } = useLocation();
    const {
        title,
        photo,
        dayOfWeek,
        episodesWatched,
        progress,
        season,
        lastDayWatched,
    }: AnimeData = state;
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleEditAnime = () => {
        setIsEdit((state) => !state);
    };

    return (
        <AnimeBoxContent>
            <AnimeBoxContainer>
                <AnimeBoxHeader>
                    <HeaderText $isEdit={!isEdit} onClick={handleEditAnime}>
                        Visualizar
                    </HeaderText>
                    <HeaderText $isEdit={isEdit} onClick={handleEditAnime}>
                        Editar
                    </HeaderText>
                </AnimeBoxHeader>
                <AnimeInfos>
                    {isEdit ? (
                        <AnimeEdit
                            title={title}
                            dayOfWeek={dayOfWeek}
                            episodesWatched={episodesWatched}
                            lastDayWatched={lastDayWatched}
                            photo={photo}
                            progress={progress}
                            season={season}
                        />
                    ) : (
                        <AnimeView
                            title={title}
                            dayOfWeek={dayOfWeek}
                            episodesWatched={episodesWatched}
                            progress={progress}
                            season={season}
                        />
                    )}
                </AnimeInfos>
            </AnimeBoxContainer>
            <BoxContentImage>
                <AnimeImage src={photo} alt={title} />
            </BoxContentImage>
        </AnimeBoxContent>
    );
};
