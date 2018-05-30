const game = require('../game') // this is the line to add

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', function () {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', function () {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', function () {
  const frame = [7, 3, 5, 2]
  const expected = frame[0] + frame[1] + frame[2] + frame[2]
  const actual = game.scoreSpare(frame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [10, 0, 6, 2]
  const expected = frame[0]
  const actual = game.scoreStrike(frame)
  expect(actual).toBe(expected)
})