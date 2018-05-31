const game = require('../game')

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', function () {
  const frame = [[0, 0]]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
  const frame = [[2, 3]]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', function () {
  const frame = [[5, 5], [2, 3]]
  const expected = 12
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [[10, 0], [2, 5]]
  const expected = 17
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
  const frame = [[10, 0], [10, 0], [2, 5]]
  const expected = 22
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a game', function () {
  const frame = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]]
  const expected = 111
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})
