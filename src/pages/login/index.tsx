import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    GenericTitle,
    LoginBox,
    Button,
    GenericSubtitle,
    TextField,
} from './styles';
import showPopup from '@utils/showPopup';
import { setName } from '@redux/features/nameSlice';
import { userService } from '@services/user';

export const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [isLogin, setIsLogin] = useState({
        login: false,
        register: false,
        userChoosen: false,
    });
    const dispatch = useDispatch();
    const userWantLogin = isLogin.login;
    const navigate = useNavigate();

    const changeUserName = (name: string) => {
        setUsername(name);
    };

    const changeLoginOption = (login: boolean) => {
        if (login) {
            return setIsLogin({
                login: true,
                register: false,
                userChoosen: true,
            });
        }

        setIsLogin({
            login: false,
            register: true,
            userChoosen: true,
        });
    };

    const handleSaveName = () => {
        dispatch(setName(username));

        isLogin.login ? handleGetUserInfos() : handleRegisterInfos();
    };

    const handleGetUserInfos = async () => {
        try {
            const response = await userService.getUsersInfo();

            const filteredUser = response.filter(
                (user) => user.nome === username
            );

            filteredUser.length
                ? navigate('/home', { state: filteredUser[0] })
                : showPopup({
                      message: 'Ops, usuário nao encontrado!',
                      type: 'warning',
                  });
        } catch (err) {
            showPopup({
                message: 'Error ao buscar usuários!',
                type: 'warning',
            });
        }
    };

    const handleRegisterInfos = async () => {
        try {
            const response = await userService.postUserInfo(username);

            navigate('/home', { state: response });
        } catch (err) {
            showPopup({
                message: 'Erro ao criar usuário!',
                type: 'warning',
            });
        }
    };

    return (
        <Container>
            <LoginBox>
                {isLogin.userChoosen ? (
                    <>
                        <GenericTitle>
                            {userWantLogin ? 'Login' : 'Cadastro'}
                        </GenericTitle>

                        <GenericSubtitle>
                            Digite seu nome abaixo
                        </GenericSubtitle>

                        <TextField
                            value={username}
                            placeholder="Digite seu nome aqui..."
                            onChange={(event) =>
                                changeUserName(event.target.value)
                            }
                        />

                        <>
                            <Button onClick={handleSaveName}>
                                Finalizar {userWantLogin ? 'Login' : 'Cadastro'}
                            </Button>

                            <p
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#000000',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #000000',
                                }}
                                onClick={() => {
                                    setIsLogin({
                                        login: false,
                                        register: false,
                                        userChoosen: false,
                                    });
                                }}
                            >
                                Retornar
                            </p>
                        </>
                    </>
                ) : (
                    <>
                        <GenericTitle>
                            Escolha como deseja prosseguir
                        </GenericTitle>

                        <Button onClick={() => changeLoginOption(true)}>
                            Entrar
                        </Button>

                        <Button onClick={() => changeLoginOption(false)}>
                            Cadastrar
                        </Button>
                    </>
                )}
            </LoginBox>
        </Container>
    );
};
