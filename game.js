module.exports = {
  gutterFrame,
  normalFrame,
  spareFrame,
  strikeFrame,
  ifNormal,
  ifSpare,
  ifStrike,
  scoresGame
}

function gutterFrame (frame) {
  return 0
}

function normalFrame (frame) {
  return frame[0] + frame[1]
}

function spareFrame (frame) {
  return frame[0][0] + frame[0][1] + frame[1][0]
}

function strikeFrame (frame) {
  if (frame.length === 2) {
    return frame[0][0] + frame[0][1] + frame[1][0] + frame[1][1]
  } else {
    return frame[0][0] + frame[0][1] + frame[1][0] + frame[1][1] + frame[2][0]
  }
}

function ifNormal (frame) {
  if (frame !== 10) {
    return true
  }
}

function ifSpare (frame) {
  if (frame[0] + frame[1] === 10) {
    return true
  }
}

function ifStrike (frame) {
  if (frame[0] === 10) {
    return true
  }
}

function scoresGame (frame) {
  let total = 0
  for (let i = 0; i < frame.length; i++) {
    if (ifStrike) {
      total += strikeFrame(frame[i])
    } else if (ifSpare) {
      total += spareFrame(frame[i])
    } else {
      total += normalFrame(frame[i])
    }
  }
  return total
}
