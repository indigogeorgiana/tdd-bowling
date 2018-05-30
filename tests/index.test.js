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
