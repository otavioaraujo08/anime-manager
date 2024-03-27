import { AnimeData } from '../interfaces/animes';
import { api as apiService, ApiService, defaultUrl } from './api';

interface getAnimesInfoProps {
    userId?: string;
    id?: string;
}

class AnimeService {
    constructor(private readonly api: ApiService) {}

    public getAnimesInfo = async (
        params: getAnimesInfoProps
    ): Promise<AnimeData[]> => {
        return this.api.get(`${defaultUrl}/anime`, { params });
    };

    public getAnimeInfo = async (id: string): Promise<AnimeData> => {
        return this.api.get(`${defaultUrl}/anime/${id}`);
    };

    public createAnimeInfos = async (data: AnimeData) => {
        return this.api.post(`${defaultUrl}/anime`, data);
    };

    public updateAnimeInfos = async (animeId: string, data: AnimeData) => {
        return this.api.put(`${defaultUrl}/anime/${animeId}`, data);
    };

    public deleteAnime = async (animeId: string) => {
        return this.api.delete(`${defaultUrl}/anime/${animeId}`);
    };
}
export const animeService = new AnimeService(apiService);
