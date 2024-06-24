import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;
    gap: 1.5rem;
`;

export const ContainerField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FieldLabel = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fefefe;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const TextFieldStyled = styled.input`
    width: 30rem;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #ffffff4a;
    border-left: #f8bb84 solid 0.5rem;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;

    @media (max-width: 1100px) {
        width: 20rem;
    }

    @media (max-width: 700px) {
        width: 15rem;
    }

    @media (max-width: 300px) {
        width: 10rem;
    }
`;

export const WarningText = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #f8bb84;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const SelectField = styled.select`
    width: 30rem;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #ffffff4a;
    border-left: #f8bb84 solid 0.5rem;
    color: #000000;
    font-weight: 600;
    font-size: 1rem;

    @media (max-width: 1100px) {
        width: 20rem;
    }

    @media (max-width: 700px) {
        width: 15rem;
    }

    @media (max-width: 300px) {
        width: 10rem;
    }
`;

export const Button = styled.button`
    width: 30rem;
    height: 2.5rem;
    background-color: #f8bb84;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: 1s;
    margin-bottom: 2rem;

    @media (max-width: 1100px) {
        width: 20rem;
    }

    @media (max-width: 700px) {
        width: 15rem;
    }

    @media (max-width: 300px) {
        width: 10rem;
    }

    &:hover {
        background-color: #22577a;
    }
`;
