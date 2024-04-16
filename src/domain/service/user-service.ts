import type { User } from "../entities/user";
import type { UserRepository } from "../repositories/user-repository";

export class UserService {
  constructor(private readonly repo: UserRepository) {}

  async remove(input: User): Promise<User[]> {
    const users = await this.repo.getAll();
    const data = users.filter((user) => {
      const data = user.toObj();
      if (data.name !== input.toObj().name) return user;
    });
    return data;
  }
}
