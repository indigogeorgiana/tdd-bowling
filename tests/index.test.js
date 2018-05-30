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
  const frame = [[2, 8], [4, 5]]
  const expected = 14
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [[10, 0], [4, 5]]
  const expected = 19
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
  const frame = [[10, 0], [10, 0], [2,6]]
  const expected = 19
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})