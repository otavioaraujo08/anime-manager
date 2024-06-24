import { SubmitHandler, useForm } from 'react-hook-form';
import {
    Button,
    Container,
    ContainerField,
    FieldLabel,
    SelectField,
    TextFieldStyled,
    WarningText,
} from './styles';
import { animeService } from '@services/anime';
import showPopup from '@utils/showPopup';
import { useLocation, useNavigate } from 'react-router-dom';
import { progress as animeProgress } from '@utils/progress';
import { seasons } from '@utils/season';
import { daysOfWeek } from '@utils/daysOfWeek';

type IFormInput = {
    title: string;
    photo: string;
    dayOfWeek: string;
    lastDayWatched: string;
    episodesWatched: number;
    progress: string;
    season: string;
};

export const AnimeEdit = ({
    title,
    dayOfWeek,
    episodesWatched,
    lastDayWatched,
    photo,
    progress,
    season,
}: IFormInput) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>();
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleRedirectPage = () => {
        navigate('/animes', {
            state: state,
        });
    };

    const handleUpdateAnimeInfos: SubmitHandler<IFormInput> = async (
        data: IFormInput
    ) => {
        try {
            await animeService.updateAnimeInfos(state._id || 'abcd', {
                ...data,
                userId: state?.userId || 1,
            });

            showPopup({
                message: 'Dados do anime atualizado com sucesso!',
                type: 'success',
            });

            reset();
            handleRedirectPage();
        } catch (error: any) {
            showPopup({
                message: 'Erro ao atualizar dados do anime!',
                type: 'warning',
            });
        }
    };

    return (
        <Container onSubmit={handleSubmit(handleUpdateAnimeInfos)}>
            <ContainerField>
                <FieldLabel>Nome</FieldLabel>

                <TextFieldStyled
                    placeholder="Digite o nome aqui..."
                    {...register('title', { required: true })}
                    defaultValue={title}
                />

                {errors.title && <WarningText>Campo obrigatório !</WarningText>}
            </ContainerField>

            <ContainerField>
                <FieldLabel>Foto</FieldLabel>

                <TextFieldStyled
                    placeholder="Insira a URL aqui..."
                    type="url"
                    {...register('photo', { required: true })}
                    defaultValue={photo}
                />

                {errors.photo && <WarningText>Campo obrigatório !</WarningText>}
            </ContainerField>

            <ContainerField>
                <FieldLabel>Dia de exibição</FieldLabel>

                <SelectField
                    {...register('dayOfWeek', { required: true })}
                    defaultValue={dayOfWeek}
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
                    defaultValue={lastDayWatched}
                    {...register('lastDayWatched', { required: true })}
                />

                {errors.lastDayWatched && (
                    <WarningText>Campo obrigatório !</WarningText>
                )}
            </ContainerField>

            <ContainerField>
                <FieldLabel>Episódios assistidos</FieldLabel>

                <TextFieldStyled
                    defaultValue={episodesWatched}
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
                    defaultValue={progress}
                >
                    {animeProgress.map((progress) => (
                        <option key={progress.value} value={progress.value}>
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
                    defaultValue={season}
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
    );
};
