import { animeService } from '@services/anime';
import showPopup from '@utils/showPopup';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AnimeInfos = styled.div`
    height: 100%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 3rem;
`;

const AnimeTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    color: #fefefe;

    @media (max-width: 900px) {
        font-size: 1.7rem;
    }

    @media (max-width: 600px) {
        font-size: 1.4rem;
    }

    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

const AnimeInfosText = styled.strong`
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: #ffc800;

    @media (max-width: 900px) {
        font-size: 1.6rem;
    }

    @media (max-width: 600px) {
        font-size: 1.3rem;
    }

    @media (max-width: 400px) {
        font-size: 0.9rem;
    }
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 40rem;
`;

const Button = styled.button<{ $background: string }>`
    height: 3rem;
    width: 15rem;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    background: ${(props) => props.$background};
    color: #ffffff;
    border-radius: 5%;
    border: 1px solid #ffffff;
    cursor: pointer;

    &:hover {
        background: #21201c;
    }

    @media (max-width: 1000px) {
        height: 3rem;
        width: 10rem;
    }

    @media (max-width: 700px) {
        height: 2rem;
        width: 8rem;
        font-size: 0.7rem;
    }

    @media (max-width: 550px) {
        height: 2rem;
        width: 7rem;
    }

    @media (max-width: 300px) {
        height: 2rem;
        width: 6rem;
    }
`;

interface IAnimeView {
    title: string;
    dayOfWeek: string;
    episodesWatched: number;
    progress: string;
    season: string;
}

export const AnimeView = ({
    title,
    dayOfWeek,
    episodesWatched,
    progress,
    season,
}: IAnimeView) => {
    const [isConfirmedDelete, setIsConfirmedDelete] = useState<boolean>(false);
    const { state } = useLocation();
    const navigate = useNavigate();
    const userData = {
        userId: state?._id || 1,
        nome: state?.nome || '',
    };

    const handleRedirectPage = () => {
        navigate('/animes', {
            state: userData,
        });
    };

    const handleDeleteAnime = async () => {
        try {
            if (isConfirmedDelete) {
                await animeService.deleteAnime(state._id);

                showPopup({
                    message: 'Anime deletado com sucesso!',
                    type: 'success',
                });

                return handleRedirectPage();
            }

            return setIsConfirmedDelete((state) => !state);
        } catch (error) {
            return showPopup({
                message: 'Erro ao deletar anime!',
                type: 'warning',
            });
        }
    };

    return (
        <AnimeInfos>
            <AnimeTitle>
                Nome: <AnimeInfosText>{title}</AnimeInfosText>
            </AnimeTitle>
            <AnimeTitle>
                Dia da semana: <AnimeInfosText>{dayOfWeek}</AnimeInfosText>
            </AnimeTitle>
            <AnimeTitle>
                Episódios concluídos:{' '}
                <AnimeInfosText>{episodesWatched}</AnimeInfosText>
            </AnimeTitle>
            <AnimeTitle>
                Status: <AnimeInfosText>{progress}</AnimeInfosText>
            </AnimeTitle>
            <AnimeTitle>
                Temporada: <AnimeInfosText>{season}</AnimeInfosText>
            </AnimeTitle>

            <ButtonsDiv>
                <Button $background="#ff0c0c" onClick={handleDeleteAnime}>
                    {isConfirmedDelete ? 'Confirmar !' : 'Apagar Anime !'}
                </Button>

                <Button $background="#ffc800" onClick={handleRedirectPage}>
                    Retornar
                </Button>
            </ButtonsDiv>
        </AnimeInfos>
    );
};
