export default class TeamGenerator {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (!this.members.has(obj)) {
      this.members.add(obj);
    } else {
      throw new Error('Вы уже добавили этого персонажа!');
    }
  }

  addAll(...obj) {
    for (const item of obj) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const array = this.toArray();
    for (let i = 0; i < array.length; i += 1) {
      yield array[i];
    }
  }
}
