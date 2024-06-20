import BlackPattern from '../../../images/blackPattern.jpg';
import styled from 'styled-components';

export const AnimeBoxContent = styled.div`
    display: flex;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    min-width: 100vw;
`;

export const AnimeBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #343959;
`;

export const AnimeBoxHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
`;

export const HeaderText = styled.h2<{ $isEdit: boolean }>`
    font-size: 1.3rem;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    color: #fefefe;
    text-decoration: ${(props) =>
        props.$isEdit ? '#f8bb84 underline' : 'none'};
    text-decoration-thickness: 3px;
    cursor: pointer;

    &:hover {
        color: #f8bb84;
    }

    @media (max-width: 900px) {
        font-size: 1rem;
    }

    @media (max-width: 700px) {
        font-size: 0.9rem;
    }
`;

export const AnimeInfos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxContentImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BlackPattern});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #fefefe;
`;

export const AnimeImage = styled.img`
    height: 30rem;
    width: fit-content;
    border: 2px solid #ffc800;

    @media (max-width: 900px) {
        height: 20rem;
    }

    @media (max-width: 600px) {
        height: 15rem;
    }

    @media (max-width: 400px) {
        height: 11rem;
    }

    @media (max-width: 300px) {
        height: 9rem;
    }

    @media (max-width: 200px) {
        height: 5rem;
    }
`;
