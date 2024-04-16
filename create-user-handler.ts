import type { Event } from "./event";
import type { Handler } from "./handle";
import type { User } from "./user";
import type { UserRepository } from "./user-repo";

export class CreateUserHandler implements Handler<User> {
  constructor(private readonly repo: UserRepository) {}
  async execute(event: Event<User>): Promise<void> {
    this.repo.add(event.payload);
  }
}
