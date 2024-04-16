import { Event } from "./event";
import type { Mediator } from "./mediator";
import { User } from "./user";

export class CreateUser {
  constructor(private readonly mediator: Mediator) {}

  execute(name: string, email: string): void {
    const user = new User(name, email);
    this.mediator.handle("create-user", new Event<User>(user));
  }
}
