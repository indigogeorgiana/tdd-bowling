module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame) {
  // if there is only one array of frames, simply add up the 
  // two numbers in the array
  if (frame.length === 1) {
    return frame[0][0] + frame[0][1]
  } 
  // if it's a spare then we have two arrays of two numbers each
  // add up the numbers in the first array and add the first number
  // of the second array
  else if (frame[0][0] + frame[0][1] === 10) {
    return (frame[0][0] + frame[0][1] + frame[1][0])
  }
}
