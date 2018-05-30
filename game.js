module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame) { // this frame currently equals either [0,0] or [2,3]   
  return frame[0] + frame[1]
}