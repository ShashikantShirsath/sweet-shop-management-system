interface User {
    id: string;
    email: string;
    password: string;
}

export class AuthRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
}