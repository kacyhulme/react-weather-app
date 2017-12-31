"use strict";

///example 1 ///
let promiseToCleanRoom = new Promise((resolve, reject) => {
  let isClean = false;

  if(isClean){
    resolve('Clean');
  } else {
    reject('NOT clean');
  }
});

// the stuff that comes after .then will only run if promise is resolved.
// if you want to handle the rejection, you need to catch it
promiseToCleanRoom.then(function(fromResolve) {
  console.log('the room is' + fromResolve);
}).catch(function(fromReject){
  console.log('the room is' + fromReject);
})

///example 2 ///
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIceCream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' won Ice Cream');
  });
};

cleanRoom().then(function(result) {
  return removeGarbage(result);
}).then(function(result) {
  return winIceCream(result);
}).then(function(result) {
  console.log("finished" + result);
});