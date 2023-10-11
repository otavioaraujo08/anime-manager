import { AnimeData } from '../interfaces/animes';
import { api as apiService, ApiService, defaultUrl } from './api';

interface getAnimesInfoProps {
    userId?: number;
    id?: number;
}

class AnimeService {
    constructor(private readonly api: ApiService) {}

    public getAnimesInfo = async (
        params: getAnimesInfoProps
    ): Promise<AnimeData[]> => {
        return this.api.get(`${defaultUrl}/animes`, { params });
    };

    public createAnimeInfos = async (data: AnimeData) => {
        return this.api.post(`${defaultUrl}/animes`, data);
    };

    public updateAnimeInfos = async (animeId: number, data: AnimeData) => {
        return this.api.put(`${defaultUrl}/animes/${animeId}`, data);
    };
}
export const animeService = new AnimeService(apiService);
