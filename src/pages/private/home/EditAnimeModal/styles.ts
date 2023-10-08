import styled from 'styled-components';

export const Container = styled.div`
    height: 80%;
    max-height: 32rem;
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    gap: 4rem;
    overflow-y: auto;
`;

export const ContainerField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FieldLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: 'IBM Plex Sans', sans-serif;
`;

export const TextField = styled.input`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const SelectField = styled.select`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const Button = styled.button`
    width: 20rem;
    height: 2rem;
    background-color: #38a3a5;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background-color: #22577a;
    }
`;