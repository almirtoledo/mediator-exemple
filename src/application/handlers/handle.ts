import type { Event } from "../../domain/event/event";

export interface Handler<T> {
  execute(event: Event<T>): Promise<void>;
}
