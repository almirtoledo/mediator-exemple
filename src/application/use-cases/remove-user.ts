import type { User } from "../../domain/entities/user";
import { Event } from "../../domain/event/event";
import type { UserRepository } from "../../domain/repositories/user-repository";
import { UserService } from "../../domain/service/user-service";
import type { Mediator } from "../mediator/mediator";

export class RemoveUser {
  constructor(
    private readonly mediator: Mediator,
    private readonly repo: UserRepository
  ) {}

  async execute(input: User): Promise<void> {
    const service = new UserService(this.repo);
    const payload = await service.remove(input);
    this.mediator.handle("remove-user", new Event<User[]>(payload));
  }
}
