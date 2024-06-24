import { AnimeData } from 'interfaces/animes';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const AnimeBox = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (max-width: 800px) {
        width: 10rem;
    }

    @media (max-width: 600px) {
        width: 8rem;
    }
`;

export const AnimeImage = styled.img`
    width: fit-content;
    max-width: 14rem;
    height: 20rem;
    border: 2px solid #ffc800;
    border-radius: 10px;

    @media (max-width: 800px) {
        height: 15rem;
    }

    @media (max-width: 600px) {
        height: 10rem;
    }
`;

export const AnimeTitle = styled.h3`
    max-width: 10rem;
    text-align: center;
    word-break: break-word;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
`;

export const AnimeSubtitle = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media (max-width: 600px) {
        font-size: 0.6rem;
    }
`;

interface AnimeCardProps {
    list: AnimeData[] | undefined;
}

export const AnimeCard = ({ list }: AnimeCardProps) => {
    const navigate = useNavigate();
    const handleRedirectToAnimePage = (anime: AnimeData) => {
        navigate(`/animes/anime/${anime._id}`, { state: anime });
    };

    if (list) {
        return list.length > 0
            ? list?.map((anime: AnimeData) => {
                  return (
                      <AnimeBox
                          onClick={() => handleRedirectToAnimePage(anime)}
                          key={anime._id}
                      >
                          <AnimeImage
                              src={anime.photo}
                              alt={anime.title}
                              loading="lazy"
                          />

                          <AnimeTitle>{anime.title}</AnimeTitle>
                          <AnimeSubtitle>{anime.progress}</AnimeSubtitle>
                      </AnimeBox>
                  );
              })
            : null;
    }
};
