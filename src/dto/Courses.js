import Users from "./Users";

export default class Courses {
  /** @type {string} */
  _id;
  /** @type {string} */
  title;
  /** @type {string} */
  description;
  /** @type {number} */
  price;
  /** @type {string} */
  instructor;
  /** @type {Users[]} */
  students;

  constructor(data) {
    this._id = String(data?._id);
    this.title = String(data?.title);
    this.description = String(data?.description);
    this.price = Number(data?.price);
    this.students = Users[data?.students];
  }
}
