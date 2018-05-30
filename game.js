module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike
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

function scoreStrike (frame) {
  let score = 0
  for (let i = 0; i < frame.length; i++) {
    if (frame[0] === 10) {
      score += frame[i]
    } else if (i === 3) {
      score += frame[i - 1] + frame[i * 2]
    }
    return score
  }
}
