import { Entity } from "./entity";

export type UserProps = {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User extends Entity {
  private constructor(private readonly props: UserProps) {
    super({
      id: props.id,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  static create(input: Pick<UserProps, "name" | "email">): User {
    return new User(input);
  }

  static update(input: Omit<UserProps, "updatedAt">): User {
    return new User(input);
  }

  toObj() {
    return {
      id: this._id,
      name: this.props.name,
      email: this.props.email,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }
}
