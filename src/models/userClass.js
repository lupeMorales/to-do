import { ROLE } from "./role.enum";
export class UserClass {
  userName = "";
  email = "";
  password = "";
  role = ROLE.USER;
  constructor(userName, email, password, role) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
