import type { User } from "../../domain/entities/user";
import type { UserRepository } from "../../domain/repositories/user-repository";

export class UserRepositoryImplementation implements UserRepository {
  private users: User[] = [];

  async create(input: User): Promise<void> {
    this.users.push(input);
  }

  async getAll(): Promise<User[]> {
    return this.users;
  }

  async setData(input: User[]): Promise<void> {
    this.users = input;
  }
}
