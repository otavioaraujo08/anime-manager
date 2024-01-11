import styled from 'styled-components';

export const AnimeModalContainer = styled.div`
    display: flex;
    height: 91%;
    background: #f1faee;
    overflow-x: scroll;

    @media (max-width: 800px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const AnimeModalImage = styled.img`
    height: 100%;
    width: fit-content;
    max-width: 25rem;

    @media (max-width: 800px) {
        height: 21rem;
    }

    @media (max-width: 500px) {
        width: 70%;
    }
`;

export const AnimeModalInfos = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 800px) {
        gap: 1rem;
    }
`;

export const AnimeModalTitle = styled.h1`
    font-family: 'Asap', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: #000000;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const ActionsDiv = styled.div`
    width: 100%;
    max-width: 32rem;
    position: absolute;
    top: 95%;
    right: 2%;
    margin: auto;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
`;

export const DeleteButton = styled.button`
    width: 25rem;
    background: #ff1717;
    border: 2px solid #ffffff;
    cursor: pointer;
    color: #ffffff;
    font-family: 'Asap', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
        background: #9f0000;
    }
`;

export const EditModalDiv = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #9f0000;
    border-radius: 50%;

    @media (max-width: 790px) {
        top: 100%;
    }

    @media (max-width: 400px) {
        display: none;
    }
`;
