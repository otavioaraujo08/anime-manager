import styled from 'styled-components';

const WarningTextStyled = styled.span`
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #c1121f;
`;

interface WarningTextProps {
    children: React.ReactNode;
}

export const WarningText = ({ children }: WarningTextProps) => {
    return <WarningTextStyled>{children}</WarningTextStyled>;
};
