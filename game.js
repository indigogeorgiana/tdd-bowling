module.exports = {
  scoreFrame,
  scoreGame
}

function scoreFrame (frame) {
  let score = 0
  // if there is only one array of frames, simply add up the
  // two numbers in the array
  if (frame.length === 1) {
    score = frame[0][0] + frame[0][1]
  // double strike
  } else if (frame[0][0] + frame[1][0] === 20) {
    score = ((frame[0][0] + frame[1][0]) + frame[1][0] + frame[2][0] + frame[2][1])
  }
  // if it's a single strike we have two arrays of two nubmers and the
  // first number of the first array is 10.
  // add up all the numbers of both arrays
  else if (frame[0][0] === 10) {
    score = (frame[0][0] + frame[0][1] + frame[1][0] + frame[1][1])
  }
  // if it's a spare then we have two arrays of two numbers each
  // add up the numbers in the first array and add the first number
  // of the second array
  else if (frame[0][0] + frame[0][1] === 10) {
    score = (frame[0][0] + frame[0][1] + frame[1][0])
  }
  return score
}

function scoreGame (frames) {
  let total = 0
  for (let i = 0; i < frames.length; i++) {
    // if the sum of the two numbers in the frame add to less than 10
    // this is an open frame - we only need to pass one array
    if (frames[i][0] + frames[i][1] < 10) {
      total += scoreFrame([frames[i]])
    } else if (frames[i][0] + frames[i + 1][0] === 20) {
      total += scoreFrame([frames[i], frames[i + 1], frames[i + 2]])
    } else if (frames[i][0] === 10) {
      total += scoreFrame(frames[i], frames[i + 1])
    } else if (frames[0][0] + frames[0][1] === 10) {
      total += scoreFrame(frames[i], frames[i + 1])
    }
  
  }
  return total
}
