import styled from 'styled-components';
import loginWallper from '../../../assets/loginWallpaper.png';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #127f96;
    background-image: url(${loginWallper});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    height: 30rem;
    width: 30rem;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1000px) {
        height: 25rem;
    }

    @media (max-width: 600px) {
        width: 80%;
    }
`;

export const GenericTitle = styled.h3`
    text-align: center;
    font-family: 'Russo One', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #305661;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const TextField = styled.input`
    height: 2.5rem;
    width: 70%;
    border: 3px solid #305661;
    border-radius: 2%;
    font-family: 'Russo One', sans-serif;
    color: #305661;
`;
