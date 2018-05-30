const game = require('../game')

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
  const frame = [[7, 3], [3, 4]]
  const expected = 13
  const actual = game.spare(frame[0], frame[1])
  expect(actual).toBe(expected)
})

test('scores a single strike frame', function () {
  const frame = [[10, 0], [3, 4]]
  const expected = 17
  const actual = game.singleStrike(frame[0], frame[1])
  expect(actual).toBe(expected)
})

test('checks wheter a frame is strike', function () {
  const frame = [10, 0]
  const expected = true
  const actual = game.isStrike(frame)
  expect(actual).toBe(expected)
})

test('checks whether a frame is spare', function () {
  const frame = [5, 5]
  const expected = true
  const actual = game.isSpare(frame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
  const frame = [[10, 0], [10, 0], [5, 4]]
  const expected = 25
  const actual = game.doubleStrike(frame[0], frame[1], frame[2])
  expect(actual).toBe(expected)
})

test('check isSingleDouble and runs correct strike function', function () {
  const frame = [[10, 0], [10, 0], [5, 4]]
  const expected = 25
  const actual = game.isSingleDouble(frame[0], frame[1], frame[2])
  expect(actual).toBe(expected)
})

test('scores a game', function () {
  const frame = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  const expected = 141
  const actual = game.scoreFrames(frame)
  expect(actual).toBe(expected)
})
