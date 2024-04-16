export class Event<T> {
  readonly occurredIn = new Date();

  constructor(readonly payload: T) {}
}
