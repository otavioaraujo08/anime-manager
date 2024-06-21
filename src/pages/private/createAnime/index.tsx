import { SubmitHandler, useForm } from 'react-hook-form';
import logo from '@assets/logo.png';
import megumin from '@assets/megumin.png';
import {
    AnimeImage,
    Body,
    BodySubtitle,
    BodyText,
    BodyTitle,
    BrandingContainer,
    Button,
    Container,
    Form,
    FormContiainer,
    Header,
    HeaderTitle,
    LogoImage,
    TextFieldStyled,
    SelectFieldStyled,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUUpLeft } from '@phosphor-icons/react';
import showPopup from '@utils/showPopup';
import { WarningText } from '@components/WarningText';
import { daysOfWeek } from '@utils/daysOfWeek';
import { progress } from '@utils/progress';
import { seasons } from '@utils/season';
import { animeService } from '@services/anime';

type IFormInput = {
    title: string;
    photo: string;
    dayOfWeek: string;
    lastDayWatched: string;
    episodesWatched: number;
    progress: string;
    season: string;
};

export const CreateAnime = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleRedirectPage = () => {
        navigate('/animes', {
            state: state,
        });
    };

    const handlePostAnimeInfos: SubmitHandler<IFormInput> = async (
        data: IFormInput
    ) => {
        try {
            await animeService.createAnimeInfos({
                ...data,
                userId: state._id,
            });

            handleRedirectPage();
        } catch (error: any) {
            showPopup({
                message: 'Erro ao criar anime!',
                type: 'warning',
            });
        }
    };

    return (
        <Container>
            <BrandingContainer>
                <Header $branding>
                    <LogoImage src={logo} alt="anime logo" loading="lazy" />

                    <HeaderTitle $branding={true}>AniManager</HeaderTitle>
                </Header>

                <Body>
                    <AnimeImage src={megumin} alt="anime logo" loading="lazy" />

                    <BodyText>
                        <BodyTitle>Ajudando a gerenciar seus animes</BodyTitle>

                        <BodySubtitle $branding>
                            Adicione as informações do seu anime favorito e
                            contribua para um acompanhamento diário dos
                            episódios da temporada
                        </BodySubtitle>
                    </BodyText>
                </Body>
            </BrandingContainer>

            <FormContiainer>
                <Header $branding={false}>
                    <ArrowUUpLeft
                        size={22}
                        color="#210303"
                        weight="bold"
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={handleRedirectPage}
                    />

                    <div>
                        <HeaderTitle $branding={false}>
                            Adicionar informações
                        </HeaderTitle>
                        <BodySubtitle $branding={false}>
                            Preencha as informações necessárias para salvar os
                            dados do seu anime.
                        </BodySubtitle>
                    </div>
                </Header>

                <Form onSubmit={handleSubmit(handlePostAnimeInfos)}>
                    <div>
                        <h1>Nome</h1>

                        <TextFieldStyled
                            placeholder="Digite o nome aqui..."
                            {...register('title', { required: true })}
                        />

                        {errors.title && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Foto</h1>

                        <TextFieldStyled
                            placeholder="Insira a URL aqui..."
                            type="url"
                            {...register('photo', { required: true })}
                        />

                        {errors.photo && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Dia de exibição</h1>

                        <SelectFieldStyled
                            {...register('dayOfWeek', { required: true })}
                        >
                            {daysOfWeek.map((day) => (
                                <option key={day.value} value={day.value}>
                                    {day.name}
                                </option>
                            ))}
                        </SelectFieldStyled>

                        {errors.dayOfWeek && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Última exibição</h1>

                        <TextFieldStyled
                            type="date"
                            {...register('lastDayWatched', { required: true })}
                        />

                        {errors.lastDayWatched && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Episódios assistidos</h1>

                        <TextFieldStyled
                            {...register('episodesWatched', { required: true })}
                            placeholder="Digite a quantidade aqui"
                            type="number"
                        />

                        {errors.episodesWatched && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Progresso</h1>

                        <SelectFieldStyled
                            {...register('progress', { required: true })}
                        >
                            {progress.map((progress) => (
                                <option
                                    key={progress.value}
                                    value={progress.value}
                                >
                                    {progress.name}
                                </option>
                            ))}
                        </SelectFieldStyled>

                        {errors.progress && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <div>
                        <h1>Temporada</h1>

                        <SelectFieldStyled
                            {...register('season', { required: true })}
                        >
                            {seasons.map((season) => (
                                <option key={season.value} value={season.value}>
                                    {season.name}
                                </option>
                            ))}
                        </SelectFieldStyled>

                        {errors.season && (
                            <WarningText>Campo obrigatório !</WarningText>
                        )}
                    </div>

                    <Body>
                        <h1>Salvar alterações</h1>

                        <Button type="submit">Salvar</Button>
                    </Body>
                </Form>
            </FormContiainer>
        </Container>
    );
};
