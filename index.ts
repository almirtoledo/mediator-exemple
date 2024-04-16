import { CreateUser } from "./create-user";
import { CreateUserHandler } from "./create-user-handler";
import { Mediator } from "./mediator";
import { UserRepository } from "./user-repo";

const repo = new UserRepository();
const mediator = new Mediator();

mediator.register("create-user", new CreateUserHandler(repo));

console.log(repo.getAll());

const createUser = new CreateUser(mediator);
createUser.execute("john doe", "any@email.com");
createUser.execute("john doe 2", "any.2@email.com");

console.log(repo.getAll());
