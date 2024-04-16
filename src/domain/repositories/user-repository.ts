import type { User } from "../entities/user";

export interface UserRepository {
  create(input: User): Promise<void>;
  getAll(): Promise<User[]>;
  setData(input: User[]): Promise<void>;
}
