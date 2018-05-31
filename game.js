module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame) { // this frame currently [[7, 0], [10, 0], [2, 5]]
  // if statement for totaling a double strike
  (var i = 0; i  < 9 ; i++){
    for (i = )
    if (frame[0][0] === 10 && frame[1][0] === 10) {
      return 20 + frame[2][0]
    } 
    // If statement for totaling a single strike
    else if (frame[0][0] === 10) {
      return 10 + frame[1][0] + frame[1][1]
    }
    // If statement for totaling a spare
    else if (frame[0][0] + frame[0][1] === 10) {
      return 10 + frame[1][0]
    }
    // if ball number 1, which is currently referenced by  ball number 2 which is referenced by  is  to  the score of a spare,
    return frame[0][0] + frame[0][1]  
  }
}
