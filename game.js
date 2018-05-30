module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare
}

// const frame = [2, 3]

function scoreFrame (frame) {
  return frame[0] + frame[1]
}

function scoreSpare (frame) {
  let score = 0
  for (let i = 0; i < frame.length; i++) {
    if (i === 3) {
      score += frame[i - 1]
    } else {
      score += frame[i]
    }
  }
  return score
}
