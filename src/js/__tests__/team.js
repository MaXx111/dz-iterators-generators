import TeamIterator from '../teamIterator.js';
import TeamGenerator from '../TeamGenerator.js';

const char3 = {
  name: 'Луч333ник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: '2222',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Should iterate Team by iterator', () => {
  const team = new TeamIterator();
  team.add(char1);
  team.addAll(char2, char3);
  const result = [];
  for (const item of team) {
    result.push(item);
  }
  expect(result.length).toEqual(4);
});

test('Should iterate Team by generator', () => {
  const team = new TeamGenerator();
  team.addAll(char2, char3);
  team.add(char1);
  const result = [];
  for (const item of team) {
    result.push(item);
  }
  expect(result.length).toEqual(3);
});

test('Should throw error', () => {
  const team = new TeamIterator();
  team.add(char3);
  expect(() => team.add(char3)).toThrow();
});

test('Should throw error', () => {
  const team = new TeamGenerator();
  team.add(char3);
  expect(() => team.add(char3)).toThrow();
});
