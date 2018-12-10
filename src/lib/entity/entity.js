export class Entity {
  uuid;
  createdAt;
  updatedAt;

  constructor() {}

  from(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key]) this[key] = obj[key];
    });
  }
}
