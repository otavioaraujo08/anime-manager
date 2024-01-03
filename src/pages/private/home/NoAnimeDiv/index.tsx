import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const BodyWithoutAnimes = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const GenericSubtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const ButtonAddAnimes = styled.button`
    height: 3rem;
    width: 15rem;
    border: none;
    border-radius: 2%;
    background: #fca311;
    color: #fff;
    cursor: pointer;
    transition: 2s;
    font-size: 1.1rem;

    &:hover {
        background: #b97507;
    }
`;

interface NoAnimeDiv {
    state: any;
}

export const NoAnimeDiv = ({ state }: NoAnimeDiv) => {
    const navigate = useNavigate();

    const handleRedirectPage = () => {
        navigate('/create-anime-info', {
            state: state,
        });
    };

    return (
        <BodyWithoutAnimes>
            <GenericSubtitle>
                Você não possui animes no momento, deseja adicionar ?
            </GenericSubtitle>

            <ButtonAddAnimes onClick={handleRedirectPage}>
                Adicionar anime
            </ButtonAddAnimes>
        </BodyWithoutAnimes>
    );
};
