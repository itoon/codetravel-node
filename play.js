// let and const

const name = "Songklod";
const age = "30";
let classRoom = "CodeTreveler";
// classRoom = classRoom + " " + "X DataRockie";
classRoom = `${classRoom} X DataRockie`;

//function
function joinClassRoom(name, classRoom) {
  return "function: " + name + " join " + classRoom;
}

// ansynimous function
const ansynimousJoinClassRoom = function (name, classRoom) {
  return "ansynimous function: " + name + " join " + classRoom;
};

//arrow function
const arrowJoinClassRoom = (name, classRoom) => {
  // this
  //console.log(this);
  return "ansynimous function: " + name + " join " + classRoom;
};

console.log(joinClassRoom(name, classRoom));

// play with ansynimous function
console.log(ansynimousJoinClassRoom(name, classRoom));
