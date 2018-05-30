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