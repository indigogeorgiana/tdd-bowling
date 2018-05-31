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
  const expected = frame[0] + frame[1] + (frame[2] * 2) + (frame[3] * 2)
  const actual = game.scoreStrike(frame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', function () {
  const frame = [10, 0, 10, 0, 4, 3]
  const expected = frame[0] + frame[1] + (frame[2] * 2) + frame[3] + (frame[4] * 3) + (frame[5] * 2)
  const actual = game.scoreDblStrike(frame)
  expect(actual).toBe(expected)
})

test('scores a game', function () {
  const frame = 
  const expected = 
  const actual = game.scoreFramesGame(frame)
  expect(actual).toBe(expected)
})

test('scores a spare in the 10th frame', function () {
  const frame = 
  const expected = 
  const actual = game.scoreGames(frame)
  expect(actual).toBe(expected)
})