module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame) { // this frame currently [[5, 5], [2, 3]]
  if (frame[0][0] === 10) { 
    return 10 + frame[1][0] + frame[1][1]
  } else if (frame[0][0] + frame[0][1] === 10) {
    return 10 + frame[1][0] 
}
  // if ball number 1, which is currently referenced by  ball number 2 which is referenced by  is  to  the score of a spare,
  return frame[0] + frame[1]
}
