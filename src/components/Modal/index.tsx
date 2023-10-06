import styled from 'styled-components';
import { X } from '@phosphor-icons/react';

const ModalContainer = styled.div`
    height: 40rem;
    width: 60rem;
    background: #ffffff;
    border-radius: 1%;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);

    @media (max-width: 1100px) {
        width: 90%;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    -webkit-backdrop-filter: blur(6px);
    height: 3rem;
    border-radius: 2%;
    border: 2px solid #cccccccc;
`;

const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    color: #000000;
    font-family: 'Asap', sans-serif;
    letter-spacing: 0.1rem;

    @media (max-width: 1100px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 0.9rem;
    }
`;

const XIcon = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    position: absolute;
    top: 4%;
    right: 3%;
    margin: auto;
    transform: translateY(-50%);

    @media (max-width: 1100px) {
        height: 1.5rem;
        width: 1.5rem;
    }
`;

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, title, closeModal, children }: ModalProps) => {
    return isOpen ? (
        <ModalContainer>
            <Header>
                <Title>{title}</Title>

                <XIcon onClick={closeModal}>
                    <X size={20} color="#210303" weight="bold" />
                </XIcon>
            </Header>

            {children}
        </ModalContainer>
    ) : null;
};
