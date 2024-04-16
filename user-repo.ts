import type { User } from "./user";

export class UserRepository {
  private users: User[] = [];

  add(input: User) {
    this.users.push(input);
  }

  getAll(): User[] {
    return this.users;
  }
}
