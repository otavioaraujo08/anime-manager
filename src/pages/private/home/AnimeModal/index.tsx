import { Pencil } from '@phosphor-icons/react';
import {
    AnimeModalContainer,
    AnimeModalInfos,
    AnimeModalImage,
    AnimeModalTitle,
    EditModalDiv,
    ActionsDiv,
    DeleteButton,
} from './styles';
import { Modal } from '@components/Modal';
import { AnimeData } from '@interfaces/animes';
import { useState } from 'react';

interface AnimeModalProps {
    animeData: AnimeData;
    isOpen: boolean;
    closeModal: () => void;
    openEditModal: (id: number) => void;
    deleteAnime: (id: number) => void;
}

export const AnimeModal = ({
    animeData,
    isOpen,
    closeModal,
    openEditModal,
    deleteAnime,
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
    const [isConfirmedDelete, setIsConfirmedDelete] = useState<boolean>(false);

    const handleDeleteAnime = async (id: number) => {
        try {
            if (isConfirmedDelete) {
                setIsConfirmedDelete((state) => !state);
                deleteAnime(id);
                return closeModal();
            }

            return setIsConfirmedDelete((state) => !state);
        } catch (error) {
            console.log(error);
        }
    };

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

                    <ActionsDiv>
                        <DeleteButton
                            onClick={() => handleDeleteAnime(id || 1090)}
                        >
                            {isConfirmedDelete
                                ? 'Confirmar !'
                                : 'Apagar Anime !'}
                        </DeleteButton>

                        <EditModalDiv onClick={() => openEditModal(id || 1)}>
                            <Pencil size={25} color="#ff1717" weight="bold" />
                        </EditModalDiv>
                    </ActionsDiv>
                </AnimeModalInfos>
            </AnimeModalContainer>
        </Modal>
    );
};
