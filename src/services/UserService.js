import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor() {
    super();
  }

  fetchMe = (id) => {
    return this.get(`api/users/${id}`);
  };

  changeUserInfo = (id) => {
    return this.put(`api/users/${id}`);
  }
}

export const userSerivce = new UserService();
