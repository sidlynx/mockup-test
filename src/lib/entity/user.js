import Entity from "./entity";

class UserEntity extends Entity {
  firstName;
  lastName;
  email;

  from(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key]) this[key] = obj[key];
    });
  }
}

export default UserEntity;
