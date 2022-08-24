export class AppService {
    public async getUser(username: string): Promise<any> {
        const response = await fetch(`https://api.github.com/users/${username}`);
        return await response.json();
    }
}