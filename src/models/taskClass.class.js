import { LEVELS } from "./levels.enum";
export class TaskClass {
  name = "";
  descrition = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, description, completed, level) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
