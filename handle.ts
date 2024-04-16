import type { Event } from "./event";

export interface Handler<T> {
  execute(event: Event<T>): Promise<void>;
}
