import { UsersInfo } from '../interfaces/user';
import { api as apiService, ApiService, defaultUrl } from './api';

class UserService {
    constructor(private readonly api: ApiService) {}

    public getUsersInfo = async (): Promise<UsersInfo[]> => {
        return this.api.get(`${defaultUrl}/users`);
    };

    public postUserInfo = async (username: string): Promise<void> => {
        return this.api.post(`${defaultUrl}/users`, {
            name: username,
        });
    };
}
export const userService = new UserService(apiService);
