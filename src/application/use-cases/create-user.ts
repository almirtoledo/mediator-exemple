import { User, type UserProps } from "../../domain/entities/user";
import { Event } from "../../domain/event/event";
import type { Mediator } from "../mediator/mediator";

export class CreateUser {
  constructor(private readonly mediator: Mediator) {}

  execute(input: Pick<UserProps, "name" | "email">): void {
    const user = User.create(input);
    this.mediator.handle("create-user", new Event<User>(user));
  }
}
