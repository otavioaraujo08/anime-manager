import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { Title } from '@components/Title';
import { AnimeData } from 'interfaces/animes';
import styled from 'styled-components';
import { useState } from 'react';

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
    const [startIndex, setStartIndex] = useState(0);

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 5);
        }
    };

    const handleNextClick = () => {
        const maxIndex = Math.min(startIndex + 5, animeList.length - 5);
        if (startIndex < maxIndex) {
            setStartIndex(startIndex + 5);
        }
    };

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
                        onClick={handlePrevClick}
                    />
                    <IoMdArrowDropright
                        size={25}
                        color="#fafafa"
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={handleNextClick}
                    />
                </HeaderContainer>
            </HeaderContainer>

            <BodyContainer>
                {animeList
                    .slice(startIndex, startIndex + 5)
                    .map((item, index) => {
                        const { photo, title } = item;

                        return (
                            <AnimeContainer key={index}>
                                <ImageContent src={photo} alt={title} />
                                <AnimeTitle>{title}</AnimeTitle>
                            </AnimeContainer>
                        );
                    })}
            </BodyContainer>
        </TodayAnimesContainer>
    );
};
