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
    gap: 3rem;
`;

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

export const AnimesBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
`;

export const AnimeBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (max-width: 800px) {
        width: 10rem;
    }

    @media (max-width: 600px) {
        width: 8rem;
    }
`;

export const AnimeImage = styled.img`
    width: 100%;
    max-width: 14rem;
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
    max-width: 10rem;
    text-align: center;
    word-break: break-word;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const AnimeSubtitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media (max-width: 600px) {
        font-size: 0.6rem;
    }
`;
