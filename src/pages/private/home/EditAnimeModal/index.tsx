import { useEffect, useState } from 'react';
import {
    Button,
    Container,
    ContainerField,
    FieldLabel,
    SelectField,
    TextFieldStyled,
    WarningText,
} from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import showPopup from '@utils/showPopup';
import { AnimeData } from '@interfaces/animes';
import { animeService } from '@services/anime';
import { Modal } from '@components/Modal';
import { daysOfWeek } from '@utils/daysOfWeek';
import { progress } from '@utils/progress';
import { seasons } from '@utils/season';

interface EditAnimeModalProps {
    id: number;
    userId: number;
    isOpen: boolean;
    closeModal: () => void;
    reload: () => void;
}

type IFormInput = {
    title: string;
    photo: string;
    dayOfWeek: string;
    lastDayWatched: string;
    episodesWatched: number;
    progress: string;
    season: string;
};

export const EditAnimeModal = ({
    id,
    userId,
    isOpen,
    closeModal,
    reload,
}: EditAnimeModalProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>();
    const [animeData, setAnimeData] = useState<AnimeData>();

    const handleUpdateAnimeInfos: SubmitHandler<IFormInput> = async (
        data: IFormInput
    ) => {
        try {
            await animeService.updateAnimeInfos(animeData?.id || 1, {
                ...data,
                userId,
            });

            reload();
            reset();
            handleCloseModal();
        } catch (error: any) {
            showPopup({
                message: 'Ops, ocorreu um erro!',
                type: 'warning',
            });
        }
    };

    const handleCloseModal = () => {
        reset();
        setAnimeData(undefined);
        closeModal();
    };

    useEffect(() => {
        const handleGetAnimeData = async (id: number) => {
            try {
                const response = await animeService.getAnimesInfo({
                    id: id,
                });

                setAnimeData(response[0]);
            } catch (error: any) {
                showPopup({
                    message: 'Ops, ocorreu um erro!',
                    type: 'warning',
                });
            }
        };

        if (id != 0) {
            handleGetAnimeData(id);
        }
    }, [id]);

    return (
        <Modal
            title="Editar informações"
            isOpen={isOpen}
            closeModal={handleCloseModal}
        >
            {animeData ? (
                <Container onSubmit={handleSubmit(handleUpdateAnimeInfos)}>
                    <ContainerField>
                        <FieldLabel>Nome</FieldLabel>

                        <TextFieldStyled
                            placeholder="Digite o nome aqui..."
                            {...register('title', { required: true })}
                            defaultValue={animeData?.title}
                        />

                        {errors.title && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Foto</FieldLabel>

                        <TextFieldStyled
                            placeholder="Insira a URL aqui..."
                            type="url"
                            {...register('photo', { required: true })}
                            defaultValue={animeData?.photo}
                        />

                        {errors.photo && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Dia de exibição</FieldLabel>

                        <SelectField
                            {...register('dayOfWeek', { required: true })}
                            defaultValue={animeData?.dayOfWeek}
                        >
                            {daysOfWeek.map((day) => (
                                <option key={day.value} value={day.value}>
                                    {day.name}
                                </option>
                            ))}
                        </SelectField>

                        {errors.dayOfWeek && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Data da última exibição</FieldLabel>

                        <TextFieldStyled
                            type="date"
                            defaultValue={animeData?.lastDayWatched}
                            {...register('lastDayWatched', { required: true })}
                        />

                        {errors.lastDayWatched && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Episódios assistidos</FieldLabel>

                        <TextFieldStyled
                            defaultValue={animeData?.episodesWatched}
                            {...register('episodesWatched', { required: true })}
                            placeholder="Digite a quantidade aqui"
                            type="number"
                        />

                        {errors.episodesWatched && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Progresso</FieldLabel>

                        <SelectField
                            {...register('progress', { required: true })}
                            defaultValue={animeData?.progress}
                        >
                            {progress.map((progress) => (
                                <option
                                    key={progress.value}
                                    value={progress.value}
                                >
                                    {progress.name}
                                </option>
                            ))}
                        </SelectField>

                        {errors.progress && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Temporada</FieldLabel>

                        <SelectField
                            {...register('season', { required: true })}
                            defaultValue={animeData?.season}
                        >
                            {seasons.map((season) => (
                                <option key={season.value} value={season.value}>
                                    {season.name}
                                </option>
                            ))}
                        </SelectField>

                        {errors.season && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Salvar alterações</FieldLabel>

                        <Button type="submit">Salvar</Button>
                    </ContainerField>
                </Container>
            ) : null}
        </Modal>
    );
};
