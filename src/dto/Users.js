import dayjs from "dayjs";

export default class Users {
  /** @type {string} */
  _id;
  /** @type {string} */
  email;
  /** @type {string} */
  role;
  /** @type {string} */
  date;

  constructor(data) {
    this._id = String(data?._id);
    this.email = String(data?.email);
    this.role = String(data?.role);
    dayjs().format();
    // const formateDate = dayjs(data?.date, "MM-DD-YYYY");
    this.date = String(dayjs(data?.date).format("YYYY-MM-DD hh:DD:mm"));
  }
}
