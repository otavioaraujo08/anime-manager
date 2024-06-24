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

const ReturnButton = styled.button`
    height: 3rem;
    width: 18rem;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    background: #ffc800;
    color: #ffffff;
    border-radius: 5%;
    border: 1px solid #ffffff;
    cursor: pointer;

    &:hover {
        background: #9d893e;
    }

    @media (max-width: 900px) {
        height: 3rem;
        width: 13rem;
    }

    @media (max-width: 600px) {
        height: 2rem;
        width: 10rem;
        font-size: 0.7rem;
    }

    @media (max-width: 400px) {
        height: 2rem;
        width: 7rem;
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
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleRedirectPage = () => {
        navigate('/animes', {
            state: state,
        });
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

            <ReturnButton onClick={handleRedirectPage}>Retornar</ReturnButton>
        </AnimeInfos>
    );
};
