import { VscVerified, VscUnverified } from 'react-icons/vsc';
import { PopupProps } from '@interfaces/popup';
import { useEffect } from 'react';
import styled from 'styled-components';

const PopupDiv = styled.div<{ $success: boolean }>`
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.$success ? '#4CAF50' : '#FF5733')};
    color: #fff;
    width: 20rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Message = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 0.1rem;
`;

export const Popup = ({ message, type, onClose }: PopupProps) => {
    const typeOfMessage = type === 'success';

    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 7000);

        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <PopupDiv $success={type === 'success'}>
            {typeOfMessage ? (
                <VscVerified size={35} collor="#" />
            ) : (
                <VscUnverified size={35} collor="#" />
            )}
            <Message>{message}</Message>
        </PopupDiv>
    );
};
