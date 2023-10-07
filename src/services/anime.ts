import { AnimeData } from '../interfaces/animes';
import { api as apiService, ApiService, defaultUrl } from './api';

class AnimeService {
    constructor(private readonly api: ApiService) {}

    public getAnimesInfo = async (userId: number): Promise<AnimeData[]> => {
        return this.api.get(`${defaultUrl}/animes?userId=${userId}`);
    };
}
export const animeService = new AnimeService(apiService);
