// Code your solution in this file!

// distanceFromHqInBlocks()
// returns a distance in blocks
// returns a distance in blocks
// calculates distances below 42nd stree
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

//distanceFromHqInFeet()
//returns a distance in feet
//returns a distance in feet
//calculates distances below 42nd street
function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

//distanceTravelledInFeet()
//returns distance when destination is below distance
function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

//calculatesFarePrice(start, destination)
//gives customers a free sample
//charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//charges 25 dollars for a distance over 2000 feet
//4) does not allow rides over 2500 feet

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}