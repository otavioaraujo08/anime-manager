import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
`;

export const BrandingContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background: #2c71f0;
    gap: 6rem;

    @media (max-width: 500px) {
        display: none;
    }
`;

export const Header = styled.div<{ $branding: boolean }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & > div {
        display: flex;
        flex-direction: column;
    }
`;

export const LogoImage = styled.img`
    width: 4rem;
    height: 4rem;

    @media (max-width: 800px) {
        width: 2rem;
        height: 2rem;
    }
`;

export const HeaderTitle = styled.h1<{ $branding: boolean }>`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => (props.$branding ? '#ffffff' : '#000000')};

    @media (max-width: 800px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const AnimeImage = styled.img`
    width: fit-content;
    height: 25rem;

    @media (max-width: 800px) {
        height: 13rem;
    }
`;

export const BodyText = styled.div`
    width: 100%;
    max-width: 35rem;
`;

export const BodyTitle = styled.h1`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const BodySubtitle = styled.h1<{ $branding: boolean }>`
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => (props.$branding ? '#e5dddd' : '#c4c4c4')};

    @media (max-width: 800px) {
        font-size: 0.9rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const FormContiainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background: #fafafa;
    gap: 4rem;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 13.5rem;

    @media (max-width: 1600px) {
        gap: 6.5rem;
    }

    @media (max-width: 1300px) {
        gap: 2.5rem;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & > h1 {
            font-size: 1.6rem;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            color: #000000;

            @media (max-width: 1200px) {
                font-size: 1.4rem;
            }

            @media (max-width: 1200px) {
                font-size: 1.2rem;
            }
        }
    }
`;

export const TextFieldStyled = styled.input`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 6px;

    @media (max-width: 800px) {
        width: 18rem;
    }

    @media (max-width: 600px) {
        width: 16rem;
    }
`;

export const SelectFieldStyled = styled.select`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 6px;

    @media (max-width: 800px) {
        width: 18rem;
    }

    @media (max-width: 600px) {
        width: 16rem;
    }
`;

export const Button = styled.button`
    width: 18rem;
    height: 2.4rem;
    background-color: #38a3a5;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 1s;

    @media (max-width: 800px) {
        width: 16rem;
        font-size: 0.9rem;
    }

    @media (max-width: 600px) {
        width: 14rem;
        font-size: 0.8rem;
    }

    &:hover {
        background-color: #22577a;
    }
`;
