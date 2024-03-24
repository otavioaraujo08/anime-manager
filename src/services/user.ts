import { ConflictResponse } from '@interfaces/response';
import { UsersInfo } from '../interfaces/user';
import { api as apiService, ApiService, defaultUrl } from './api';

class UserService {
    constructor(private readonly api: ApiService) {}

    public getUsersInfo = async (): Promise<UsersInfo[]> => {
        return this.api.get(`${defaultUrl}/user`);
    };

    public postUserInfo = async (
        username: string
    ): Promise<ConflictResponse> => {
        return this.api.post(`${defaultUrl}/user`, {
            nome: username,
        });
    };
}
export const userService = new UserService(apiService);
