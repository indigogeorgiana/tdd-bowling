module.exports = {
  scoreFrame: scoreFrame,
  scoreSpare: scoreSpare,
  scoreStrike: scoreStrike,
  scoreDblStrike: scoreDblStrike,
  scoreFramesGame: ScoreFramesGame,
  scoreGames: scoreGames
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
    if (frame[i] === 10) {
      score += frame[i]
    } else if (i === 3) {
      score += (frame[i - 1] * 2) + frame[i] * 2
    }
  }
  return score
}

function scoreDblStrike (frame) {
  let score = 0
  let strike = 0
  for (let i = 0; i < frame.length; i++) {
    if ((strike === 10) && (frame[i] === 10)) {
      strike = 30
    } else if ((strike === 30) && (frame[i] !== 10) && frame[i] !== 0) {
      score += (strike + frame[i] * 3)
      strike = 0
    } else if (frame[i] === 10) {
      strike = 10
    } else if (frame[i] === 0) {
      score += 0
    } else {
      score += frame[i] * 2
    }  
  }
  return score
}

function scoreFramesGame (frame) {

}

function scoreGames (frame) {
  
}
