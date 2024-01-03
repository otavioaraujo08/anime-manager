import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { Title } from '@components/Title';
import { AnimeData } from 'interfaces/animes';
import styled from 'styled-components';

const TodayAnimesContainer = styled.div`
    width: 96%;
    height: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const AnimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageContent = styled.img`
    width: fit-content;
    height: 18rem;
`;

const AnimeTitle = styled.h1`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 13rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fca311;
    letter-spacing: 0.1rem;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`;

interface TodayAnimesProps {
    animeList: AnimeData[];
}

export const TodayAnimes = ({ animeList }: TodayAnimesProps) => {
    console.log(animeList);

    return (
        <TodayAnimesContainer>
            <HeaderContainer>
                <Title title="Exibidos Hoje" />
                <HeaderContainer>
                    <IoMdArrowDropleft
                        size={25}
                        color="#fafafa"
                        style={{
                            cursor: 'pointer',
                        }}
                    />
                    <IoMdArrowDropright
                        size={25}
                        color="#fafafa"
                        style={{
                            cursor: 'pointer',
                        }}
                    />
                </HeaderContainer>
            </HeaderContainer>

            <BodyContainer>
                {animeList.map((item) => {
                    const { photo, title } = item;

                    return (
                        <AnimeContainer>
                            <ImageContent src={photo} alt={title} />
                            <AnimeTitle>{title}</AnimeTitle>
                        </AnimeContainer>
                    );
                })}
            </BodyContainer>
        </TodayAnimesContainer>
    );
};
