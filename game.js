module.exports = {
  gutterFrame,
  normalFrame,
  spareFrame,
  strikeFrame
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
  if (frame.length ===2){
return frame[0][0] + frame[0][1] + frame[1][0] +frame[1][1]
  } else {
    return frame[0][0] + frame[0][1] + frame[1][0] +frame[1][1] + frame[2][0]
  }
}

