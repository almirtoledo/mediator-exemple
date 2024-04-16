export class Event<T> {
  readonly occurredIn = new Date();

  constructor(readonly payload: T) {}
}

export interface DomainEvent<T> {
  readonly eventName: string;
  readonly payload: T;
}
