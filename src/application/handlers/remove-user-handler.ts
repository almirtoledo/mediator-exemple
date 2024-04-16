import type { User } from "../../domain/entities/user";
import type { Event } from "../../domain/event/event";
import type { UserRepository } from "../../domain/repositories/user-repository";
import type { Handler } from "./handle";

export class RemoveUserHandler implements Handler<User[]> {
  constructor(private readonly repo: UserRepository) {}

  async execute(event: Event<User[]>): Promise<void> {
    await this.repo.setData(event.payload);
  }
}
