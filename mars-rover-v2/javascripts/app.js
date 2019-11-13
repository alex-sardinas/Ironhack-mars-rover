
// ======================
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
};

grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
]

// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y -= 1;
      break;
    case 'E':
      rover.x += 1;
      break;
    case 'S':
      rover.y += 1;
      break;
    case 'W':
      rover.x -= 1;
      break;
  }
  console.log("moveForward was called")
  console.log(rover.x, rover.y);
};

function moveBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y += 1;
      break;
    case 'E':
      rover.x -= 1;
      break;
    case 'S':
      rover.y -= 1;
      break;
    case 'W':
      rover.x += 1;
      break;
  }
  console.log("moveBackward was called")
  console.log(rover.x, rover.y);
};

function movement(sequence, rover) {
  for (var i = 0; i < sequence.length; i++) {
    switch (sequence[i]) {
      case 'f':
        moveForward(rover, grid);
        break;
      case 'b':
        moveBackward(rover, grid)
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        console.log(`The command ${sequence} is not vaild`);
    }
  }

  rover.travelLog.push([rover.x, rover.y])
};

