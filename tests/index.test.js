const game = require('../game')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  // arrange
  const frame = [0, 0]
  const expected = 0
  // act
  const actual = game.scoreFrame(frame)
  // assert
  expect(actual).toBe(expected)
})
