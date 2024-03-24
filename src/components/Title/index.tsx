import { FaGripLinesVertical } from 'react-icons/fa';
import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const TitleStyled = styled.h1`
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

interface TitleProps {
    title: string;
}

export const Title = ({ title }: TitleProps) => {
    return (
        <TitleContainer>
            <FaGripLinesVertical size={30} color="#f4d4d4" />
            <TitleStyled>{title}</TitleStyled>
        </TitleContainer>
    );
};
