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
    Form,
    FormContiainer,
    Header,
    HeaderTitle,
    LogoImage,
} from './styles';

export const CreateAnime = () => {
    return (
        <Container>
            <BrandingContainer>
                <Header $branding>
                    <LogoImage src={logo} alt="anime logo" loading="lazy" />

                    <HeaderTitle $branding={true}>AniManager</HeaderTitle>
                </Header>

                <Body>
                    <AnimeImage src={megumin} alt="anime logo" loading="lazy" />

                    <BodyText>
                        <BodyTitle>Ajudando a gerenciar seus animes</BodyTitle>

                        <BodySubtitle $branding>
                            Adicione as informações do seu anime favorito e
                            contribua para um acompanhamento diário dos
                            episódios da temporada
                        </BodySubtitle>
                    </BodyText>
                </Body>
            </BrandingContainer>

            <FormContiainer>
                <Header $branding={false}>
                    <HeaderTitle $branding={false}>
                        Adicionar informações
                    </HeaderTitle>
                    <BodySubtitle $branding={false}>
                        Adicione as informações necessárias para salvar os dados
                        do seu anime.
                    </BodySubtitle>
                </Header>

                <Form></Form>
            </FormContiainer>
        </Container>
    );
};
