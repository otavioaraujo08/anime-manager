import styled from 'styled-components';
import homeWallpaper from '../../../assets/homeWallpaper.jpg';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 1.5rem;
    text-align: left;
    background-image: url(${homeWallpaper});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Header = styled.div`
    height: 5rem;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem;
`;

export const GenericTitle = styled.h2`
    font-family: 'Asap', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #000000;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const Textfield = styled.input`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ffc800;
    border-radius: 5%;

    @media (max-width: 800px) {
        width: 15rem;
    }

    @media (max-width: 600px) {
        width: 10rem;
    }

    @media (max-width: 400px) {
        display: none;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;
`;

export const GenericSubtitle = styled.h2`
    font-family: 'Asap', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #ffc800;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const AnimesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;

export const AnimeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 1rem;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const AnimeImage = styled.img`
    width: fit-content;
    height: 20rem;
    border: 2px solid #ffc800;
    border-radius: 10px;

    @media (max-width: 800px) {
        height: 15rem;
    }

    @media (max-width: 600px) {
        height: 10rem;
    }
`;

export const AnimeTitle = styled.h3`
    font-family: 'Asap', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const AnimeSubtitle = styled.h4`
    font-family: 'Asap', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;
