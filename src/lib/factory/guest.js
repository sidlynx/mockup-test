import Api from "../call";
export class UserFactory extends Api {
  //name = "guest";
  login(model) {
    return this.call(this.name, "login", model);
  }
  register(model) {
    return this.call(this.name, "register", model);
  }
}

export default new UserFactory();
