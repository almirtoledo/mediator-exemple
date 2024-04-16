import type { Event } from "../../domain/event/event";
import type { Handler } from "../handlers/handle";

export class Mediator {
  private handlers: Map<string, Handler<any>> = new Map();

  register(eventName: string, handler: Handler<any>) {
    const handlers = this.handlers || [];
    handlers.set(eventName, handler);
    this.handlers = handlers;
  }

  handle(eventName: string, event: Event<any>) {
    const handler = this.handlers.get(eventName);
    if (handler) handler.execute(event);
  }
}
