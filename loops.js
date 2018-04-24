// For Loop
function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop`);
    }
    else {
     array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

// While loop
function whileLoop(n) {
  var countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  if (countdown === 0) {
    return 'done'
  }
}

// Do-While Loop
function doWhileLoop(array) {
  function maybeTrue() {
<<<<<<< HEAD
  return Math.random() >= 0.5;
  }
  do {
   var newArray = array.slice(1);
  }
  while (newArray.length > 0 && maybeTrue());
  return newArray;
=======
  return Math.random() >= 0.5
  }
  
  do {
   array = array.slice(1);
  }
  
  while (array.length > 0 && maybeTrue());
  return array;
>>>>>>> 74eb94a837055652eaffd0b20afb380bbe9965f1
}