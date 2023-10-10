import styled from 'styled-components';

const Button = styled.button`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
    background: #000000;
    color: #c4c4c4;
    cursor: pointer;
    position: absolute;
    top: 95%;
    right: 2%;
    margin: auto;
    transform: translateY(-50%);
`;

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const FloatButton = ({ onClick, children }: ButtonProps) => {
    return <Button onClick={onClick}>{children}</Button>;
};
