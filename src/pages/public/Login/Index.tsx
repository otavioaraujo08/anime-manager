import { useState } from 'react';
import { Button, Container, GenericTitle, LoginBox, TextField } from './styles';
import { useDispatch } from 'react-redux';
import { setName } from '../../../redux/features/nameSlice';

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const dispatch = useDispatch();

    const changeUserName = (name: string) => {
        setUsername(name);
    };

    const handleSaveName = () => {
        dispatch(setName(username));
    };

    return (
        <Container>
            <LoginBox>
                <GenericTitle>Digite seu nome abaixo</GenericTitle>

                <TextField
                    value={username}
                    placeholder="Digite seu nome aqui..."
                    onChange={(event) => changeUserName(event.target.value)}
                />

                <Button onClick={handleSaveName}>Finalizar Login</Button>
            </LoginBox>
        </Container>
    );
};
