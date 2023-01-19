export default class TeamIterator {
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

  [Symbol.iterator]() {
    const arrayOfMembers = this.toArray();
    let index = 0;
    return {
      next() {
        if (index > arrayOfMembers.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        index += 1;
        return {
          value: arrayOfMembers[index - 1],
          done: false,
        };
      },
    };
  }
}
