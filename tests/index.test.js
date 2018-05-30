const game = require('../game')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  // arrange
  const frame = [0, 0]
  const expected = 0
  // act
  const actual = game.gutterFrame(frame)
  // assert
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  // arrange
  const frame = [6, 2]
  const expected = 8
  // act
  const actual = game.normalFrame(frame)
  // assert
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  // arrange
  const frame = [[6, 4], [4]]
  const expected = 14
  // act
  const actual = game.spareFrame(frame)
  // assert
  expect(actual).toBe(expected)
})

test('scores a strike frame', () => {
  // arrange
  const frame = [[10, 0], [10, 0], [5, 0]]
  const expected = 25
  // act
  const actual = game.strikeFrame(frame)
  // assert
  expect(actual).toBe(expected)
})

test('determinds if normal frame ', () => {
  // arrange
  const frame = [5, 4]
  const expected = true
  // act
  const actual = game.ifNormal(frame)
  // assert
  expect(actual).toBe(expected)
})

test('determinds if spare frame ', () => {
  // arrange
  const frame = [5, 5]
  const expected = true
  // act
  const actual = game.ifSpare(frame)
  // assert
  expect(actual).toBe(expected)
})
// test('scores a game ', () => {
  // arrange
  //const frame = [[10, 0], [10, 0], [5, 0], [6, 2], [10,0], [3, 7], [6,4], [8, 1], [0, 10], [0,0]]
  //const expected = 126
  // act
  //const actual = game.scoresGame(frame)
  // assert
  //expect(actual).toBe(expected)
//}) 
