export class Worker {
  constructor({
    fullName = "",
    birthday = "",
    payment = 0,
    id = null,
    position = "",
  }) {
    this.id = id;
    this.fullName = fullName;
    this.position = position;
    this.birthday = birthday;
    this.payment = payment;
  }
}
