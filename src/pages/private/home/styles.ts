import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 1.5rem;
    text-align: left;
    background: #2f4550;
`;

export const Header = styled.div`
    height: 5rem;
    background: #586f7c;
    backdrop-filter: blur(3.5px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem;

    & > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

export const LogoImage = styled.img`
    width: 4rem;
    height: 4rem;

    @media (max-width: 600px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const GenericTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const Textfield = styled.input`
    width: 20rem;
    height: 2rem;

    @media (max-width: 800px) {
        width: 15rem;
    }

    @media (max-width: 600px) {
        width: 10rem;
    }

    @media (max-width: 450px) {
        display: none;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
`;

export const AnimeTable = styled.div`
    padding: 0 2rem;
    margin-bottom: 2rem;
`;

export const AnimesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;
