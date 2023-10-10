import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
`;

export const BrandingContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background: #2c71f0;
    gap: 6rem;
`;

export const Header = styled.div<{ $branding: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.$branding ? 'row' : 'column')};
    align-items: ${(props) => (props.$branding ? 'center' : 'left')};
    gap: ${(props) => (props.$branding ? '0.6rem' : 0)};
`;

export const LogoImage = styled.img`
    width: 4rem;
    height: 4rem;
`;

export const HeaderTitle = styled.h1<{ $branding: boolean }>`
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => (props.$branding ? '#ffffff' : '#000000')};
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const AnimeImage = styled.img`
    width: fit-content;
    height: 25rem;
`;

export const BodyText = styled.div`
    width: 100%;
    max-width: 35rem;
`;

export const BodyTitle = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
`;

export const BodySubtitle = styled.h1<{ $branding: boolean }>`
    text-align: left;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => (props.$branding ? '#e5dddd' : '#c4c4c4')};
`;

export const FormContiainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background: #fafafa;
    gap: 6rem;
`;

export const Form = styled.form``;
