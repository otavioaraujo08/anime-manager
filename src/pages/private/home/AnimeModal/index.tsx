import { Pencil } from '@phosphor-icons/react';
import {
    AnimeModalContainer,
    AnimeModalInfos,
    AnimeModalImage,
    AnimeModalTitle,
    EditModalDiv,
} from './styles';
import { Modal } from '../../../../components/Modal';
import { AnimeData } from '../../../../interfaces/animes';

interface AnimeModalProps {
    animeData: AnimeData;
    isOpen: boolean;
    closeModal: () => void;
    openEditModal: (id: number) => void;
}

export const AnimeModal = ({
    animeData,
    isOpen,
    closeModal,
    openEditModal,
}: AnimeModalProps) => {
    const {
        id,
        photo,
        title,
        season,
        dayOfWeek,
        episodesWatched,
        lastDayWatched,
        progress,
    } = animeData;

    return (
        <Modal title="Informações" isOpen={isOpen} closeModal={closeModal}>
            <AnimeModalContainer>
                <>
                    <AnimeModalImage
                        src={
                            photo ||
                            'https://defeatzone.com/wp-content/uploads/2023/09/a.png'
                        }
                        alt="anime photo"
                    />
                </>

                <AnimeModalInfos>
                    <AnimeModalTitle>
                        Título: <strong>{title || 'Nome padrão'}</strong>
                    </AnimeModalTitle>

                    <AnimeModalTitle>
                        Temporada:{' '}
                        <strong>{season || 'Temporada Atual'}</strong>
                    </AnimeModalTitle>

                    <AnimeModalTitle>
                        Dia de exibição:{' '}
                        <strong>{dayOfWeek || 'Dia aleatorio'}</strong>
                    </AnimeModalTitle>

                    <AnimeModalTitle>
                        Episódios assistidos:{' '}
                        <strong>
                            {episodesWatched || 'Quantidade aleatoria'}
                        </strong>
                    </AnimeModalTitle>

                    <AnimeModalTitle>
                        Última exibição:{' '}
                        <strong>{lastDayWatched || 'Data aleatorio'}</strong>
                    </AnimeModalTitle>

                    <AnimeModalTitle>
                        Progresso: <strong>{progress || 'Progresso'}</strong>
                    </AnimeModalTitle>

                    <EditModalDiv onClick={() => openEditModal(id)}>
                        <Pencil size={25} color="#210303" weight="bold" />
                    </EditModalDiv>
                </AnimeModalInfos>
            </AnimeModalContainer>
        </Modal>
    );
};
