import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: #127f96;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    background-color: #e6e4d5;
    height: 30rem;
    width: 30rem;
    border: 3px solid #305661;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

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

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }

    @media (max-width: 400px) {
        font-size: 1.2rem;
    }

    @media (max-width: 220px) {
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
