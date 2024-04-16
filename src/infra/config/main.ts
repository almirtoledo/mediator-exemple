import { CreateUserHandler } from "../../application/handlers/create-user-handler";
import { RemoveUserHandler } from "../../application/handlers/remove-user-handler";
import { Mediator } from "../../application/mediator/mediator";
import { CreateUser } from "../../application/use-cases/create-user";
import { RemoveUser } from "../../application/use-cases/remove-user";
import { UserRepositoryImplementation } from "../repositories/user-repostory-implementation";

const repo = new UserRepositoryImplementation();
const mediator = new Mediator();

mediator.register("create-user", new CreateUserHandler(repo));
mediator.register("remove-user", new RemoveUserHandler(repo));

const createUser = new CreateUser(mediator);
const removeUser = new RemoveUser(mediator, repo);

createUser.execute({ name: "User 1", email: "user-1@email.com" });
createUser.execute({ name: "User 2", email: "user-2@email.com" });
createUser.execute({ name: "User 3", email: "user-3@email.com" });
createUser.execute({ name: "User 4", email: "user-5@email.com" });

// users payload
const users = await repo.getAll();
const data = users.map((user) => user.toObj());
console.log("Current payload: ", data);

// users payload after removing "User 3"
await removeUser.execute(users[2]);
const users2 = await repo.getAll();
const data2 = users2.map((user) => user.toObj());
console.log(`"Users payload after removing "User 3":`, data2);
