import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 0.1rem;

    & > strong {
        color: #99c923;
    }

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const AnimesDiv = styled.div`
    max-height: 64vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.6rem;
        height: 0.6rem;
    }

    &::-webkit-scrollbar-track {
        background: #1b6691;
    }

    &::-webkit-scrollbar-thumb {
        background: #99c923;
        border-radius: 10px;
    }
`;

export const AnimeDiv = styled.div`
    background: #586f7c;
    height: 10rem;
    width: 100%;
    min-width: 73rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 0px;

    @media (max-width: 1200px) {
        min-width: 0;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(4, 1fr);
        height: 3rem;
    }
`;

export const AnimeImageDiv = styled.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    flex-direction: column;
    justify-content: left;

    @media (max-width: 500px) {
        display: none;
    }
`;
export const AnimeTitleDiv = styled.div`
    grid-area: 1 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    @media (max-width: 500px) {
        grid-area: 1 / 1 / 3 / 2;
    }
`;
export const AnimeDayOfWeekDiv = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    @media (max-width: 500px) {
        grid-area: 1 / 2 / 3 / 3;
    }
`;
export const AnimeEpisodesConcludedDiv = styled.div`
    grid-area: 1 / 4 / 4 / 5;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    @media (max-width: 500px) {
        grid-area: 1 / 3 / 3 / 4;
    }
`;
export const AnimeLastExibitionDiv = styled.div`
    grid-area: 1 / 5 / 4 / 6;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    @media (max-width: 500px) {
        grid-area: 1 / 4 / 3 / 5;
    }
`;

export const AnimeImage = styled.img`
    height: 100%;
    width: fit-content;
`;

export const Label = styled.h1`
    max-width: 10rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 0.1rem;

    @media (max-width: 1200px) {
        font-size: 1rem;
        max-width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media (max-width: 500px) {
        font-size: 0.6rem;
    }
`;

export const AnimeInfo = styled.p`
    max-width: 10rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #99c923;
    letter-spacing: 0.1rem;

    @media (max-width: 1200px) {
        font-size: 0.8rem;
        max-width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 0.6rem;
    }

    @media (max-width: 400px) {
        font-size: 0.4rem;
    }
`;
