import { AnimeData } from './animes';

export interface UsersInfo {
    id: number;
    name: string;
    animes: AnimeData[];
}
