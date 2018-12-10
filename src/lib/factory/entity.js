import Api from "../call";
export class EntityFactory extends Api {
  //name = "entity";
  create(entity) {
    return this.call(this.name, "create", entity);
  }
  read(uuid) {
    return this.call(this.name, "read", { uuid });
  }
  update(entity) {
    return this.call(this.name, "update", entity);
  }
  list() {
    return this.call(this.name, "list");
  }
  delete(uuid) {
    return this.call(this.name, "delete", { uuid });
  }
  remove(uuid) {
    return this.call(this.name, "remove", { uuid });
  }
}

export default new EntityFactory();
