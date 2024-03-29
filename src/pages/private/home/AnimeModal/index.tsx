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
import showPopup from '@utils/showPopup';

interface AnimeModalProps {
    animeData: AnimeData;
    isOpen: boolean;
    closeModal: () => void;
    openEditModal: (id: string) => void;
    deleteAnime: (id: string) => void;
}

export const AnimeModal = ({
    animeData,
    isOpen,
    closeModal,
    openEditModal,
    deleteAnime,
}: AnimeModalProps) => {
    const {
        _id,
        photo,
        title,
        season,
        dayOfWeek,
        episodesWatched,
        lastDayWatched,
        progress,
    } = animeData;
    const [isConfirmedDelete, setIsConfirmedDelete] = useState<boolean>(false);

    const handleDeleteAnime = async (id: string) => {
        try {
            if (isConfirmedDelete) {
                setIsConfirmedDelete((state) => !state);
                deleteAnime(id);
                return closeModal();
            }

            return setIsConfirmedDelete((state) => !state);
        } catch (error) {
            return showPopup({
                message: 'Erro ao confirmar apagar!',
                type: 'warning',
            });
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
                            onClick={() => handleDeleteAnime(_id || '')}
                        >
                            {isConfirmedDelete
                                ? 'Confirmar !'
                                : 'Apagar Anime !'}
                        </DeleteButton>

                        <EditModalDiv onClick={() => openEditModal(_id || '')}>
                            <Pencil size={25} color="#ff1717" weight="bold" />
                        </EditModalDiv>
                    </ActionsDiv>
                </AnimeModalInfos>
            </AnimeModalContainer>
        </Modal>
    );
};
