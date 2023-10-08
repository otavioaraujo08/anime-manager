import styled from 'styled-components';
import homeWallpaper from '../../../assets/homeWallpaper.jpg';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-image: url(${homeWallpaper});
    background-repeat: no-repeat;
    background-size: cover;
`;
