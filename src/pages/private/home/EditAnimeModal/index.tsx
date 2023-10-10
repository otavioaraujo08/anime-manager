import { useEffect, useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { animeService } from '../../../../services/anime';
import { AnimeData } from '../../../../interfaces/animes';
import {
    Button,
    Container,
    ContainerField,
    FieldLabel,
    SelectField,
    WarningText,
} from './styles';
import { daysOfWeek } from '../../../../utils/daysOfWeek';
import { progress } from '../../../../utils/progress';
import { useForm, SubmitHandler } from 'react-hook-form';
import { seasons } from '../../../../utils/season';
import { TextField } from '../../../../components/TextField';

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
            closeModal();
        } catch (error: any) {
            alert(error.message);
        }
    };

    useEffect(() => {
        const handleGetAnimeData = async (id: number) => {
            try {
                const response = await animeService.getAnimesInfo({
                    id: id,
                });

                setAnimeData(response[0]);
            } catch (error: any) {
                alert(error.message);
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
            closeModal={closeModal}
        >
            {animeData ? (
                <Container onSubmit={handleSubmit(handleUpdateAnimeInfos)}>
                    <ContainerField>
                        <FieldLabel>Nome</FieldLabel>

                        <TextField
                            auxiliarText="Digite o nome aqui..."
                            {...register('title', { required: true })}
                            defaultValue={animeData?.title}
                        />

                        {errors.title && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </ContainerField>

                    <ContainerField>
                        <FieldLabel>Foto</FieldLabel>

                        <TextField
                            auxiliarText="Insira a URL aqui..."
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

                        <TextField
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

                        <TextField
                            defaultValue={animeData?.episodesWatched}
                            {...register('episodesWatched', { required: true })}
                            auxiliarText="Digite a quantidade aqui"
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
