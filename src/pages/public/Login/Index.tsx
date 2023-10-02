import { Container, GenericTitle, LoginBox, TextField } from './styles';

export const Login = () => {
    return (
        <Container>
            <LoginBox>
                <GenericTitle>Digite seu nome abaixo</GenericTitle>

                <TextField placeholder="Digite seu nome aqui..." />
            </LoginBox>
        </Container>
    );
};
