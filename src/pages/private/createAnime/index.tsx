import logo from '../../../assets/logo.png';
import megumin from '../../../assets/megumin.png';
import {
    AnimeImage,
    Body,
    BodySubtitle,
    BodyText,
    BodyTitle,
    BrandingContainer,
    Container,
    FormContiainer,
    Header,
    HeaderTitle,
    LogoImage,
} from './styles';

export const CreateAnime = () => {
    return (
        <Container>
            <BrandingContainer>
                <Header>
                    <LogoImage src={logo} alt="anime logo" loading="lazy" />

                    <HeaderTitle>AniManager</HeaderTitle>
                </Header>

                <Body>
                    <AnimeImage src={megumin} alt="anime logo" loading="lazy" />

                    <BodyText>
                        <BodyTitle>Ajudando a gerenciar seus animes</BodyTitle>

                        <BodySubtitle>
                            Adicione as informações do seu anime favorito e
                            contribua para um acompanhamento diário dos
                            episódios da temporada
                        </BodySubtitle>
                    </BodyText>
                </Body>
            </BrandingContainer>
            <FormContiainer>
                <h1>Adicionar informações</h1>
            </FormContiainer>
        </Container>
    );
};
