var curiosity = {
  direction : "N",
  x: 0,
  y: 0,
  log: []
};

var apolo = {
  direction : "W",
  x: 5,
  y: 5,
  log: []
};

function turnLeft (rover) {
  console.log("Antes", rover.direction)
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "W":
      rover.direction = "S"
      break;
  }
  console.log("Despues", rover.direction)
}

function turnRight (rover) {
  console.log("Antes", rover.direction)
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  }
console.log("Despues", rover.direction)
}

function moveForward (rover){
  //Condiciones
  switch (rover.direction) {
    case "N":
      rover.y = rover.y - 1;
      break;
    case "E":
      rover.x = rover.x + 1;
      break;
    case "S":
      rover.y = rover.y + 1;
      break;
    case "W":
      rover.x = rover.x -1;
      break;
  }
  console.log("X= ", rover.x ,"Y= ", rover.y);
  //console.log(`X= ${rover.x} Y= ${rover.y}`); Interpolacion de String (Un detalle para aprender)
}

function moveBackward (rover){ //Añadir todas las posibilidades de x < 0 O x > 10 .....
  if(rover.y + 1 <= 10 || rover.x - 1 < 0 || rover.x + 1 >= 10 || rover.y - 1 < 0){
    switch (rover.direction) {
      case "N":
        rover.y = rover.y + 1;
        break;
      case "E":
        rover.x = rover.x - 1;
        break;
      case "S":
        rover.y = rover.y - 1;
        break;
      case "W":
        rover.x = rover.x + 1;
        break; 
      }
    } else {
    console.log("Que me piiiro")
    }
  console.log("X= ", rover.x , "Y= ", rover.y);
}

function moveBody (instrucciones, rover){
  console.log(instrucciones)
  for(var i = 0; i<instrucciones.length; i++){
    // if(intrucciones[i] === "f" || intrucciones[i] === "r" || intrucciones[i] === "l" || intrucciones[i] === "b"){ AQUI DENTRO VA EL SWITCH }
    switch (instrucciones[i]) {
      case "f":
        moveForward(rover)
        break;
      case "b":
        moveBackward(rover)
        break;
      case "r":
        turnRight(rover)
        break;
      case "l":
        turnLeft(rover)
        break;
      default:
       console.log("Escribes mal las instrucciones")
        break;
    }
  rover.log.push({
    x : rover.x,
    y : rover.y,
    direction : rover.direction
  }) 
  }
}


/* Validate Inputs

Quiero validar que solo entra texto con fblr
1. Comprobar antes de entrar en el Switch si la letra es f b l r.
2. Hacer un caso default en el Switch para cuando la letras no coincide. <----
3. Funcion que checkea.
*/


/* Obstacles*/
var piedra  = {x : 0, y : 8}
var piedra2 = {x : 1, y :0}

var piedrasDeMarte = [piedra, piedra2]

for(i=0; i<piedrasDeMarte.length; i++){
  if(piedrasDeMarte[i].x !== rover.x + 1){
    rover.x = rover.x + 1
  } else {
    console.log("No voy que me choco")
  }
  if(piedrasDeMarte[i].y !== rover.y + 1){
    rover.y = rover.y + 1
  } else {
    console.log("piedra!")
  }
}



