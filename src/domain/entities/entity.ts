export abstract class Entity {
  protected readonly _id: string;
  protected readonly _createdAt: Date;
  protected readonly _updatedAt: Date;

  constructor(props: { id?: string; createdAt?: Date; updatedAt?: Date }) {
    const now = new Date();
    this._id = props.id ?? crypto.randomUUID();
    this._createdAt = props.createdAt ?? now;
    this._updatedAt = props.updatedAt ?? now;
  }
}
