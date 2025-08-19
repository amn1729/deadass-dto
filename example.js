import Response from "./index.js";

class UserDto extends Response {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

class PaginatedUsersDto extends Response {
  constructor() {
    super();
    this.users = [new UserDto("Ben", 10), new UserDto("Gwen", 10)];
  }
}

// basic success example
const user = new UserDto("Ben", 10).message("Fetched user").toJson();

// almost all of the possible methods
const users = new PaginatedUsersDto()
  .status(200)
  .message("Fetched users")
  .action("get users")
  .add("id", 123)
  .metadata({
    total: 300,
    page: 10,
    length: 30,
  })
  .toJson();

console.log(user);
console.log(users);
console.log(JSON.stringify(users));
