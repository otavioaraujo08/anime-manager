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
    display: flex;

    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem;
        gap: 2.5rem;
        overflow-y: scroll;

        @media (max-width: 1200px) {
            gap: 1rem;
        }

        @media (max-width: 250px) {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 0.6rem;
            height: 0.6rem;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background: #99c923;
            border-radius: 10px;
        }
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
`;
