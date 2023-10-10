import styled from 'styled-components';

export const TextFieldStyled = styled.input`
    width: 20rem;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

interface TextFieldProps {
    auxiliarText?: string;
    type?: string;
    defaultValue?: string | number;
}

export const TextField = ({
    auxiliarText,
    type,
    defaultValue,
}: TextFieldProps) => {
    return (
        <TextFieldStyled
            placeholder={auxiliarText}
            type={type}
            defaultValue={defaultValue}
        />
    );
};
