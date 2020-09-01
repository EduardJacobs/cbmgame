function cbmGame(){

  let arrayTd, random, randomTd;

  // Get a collection of td elements and then convert it to an array
  arrayTd = [].slice.call(document.getElementsByTagName("td"));

  // Reset classes in all td elements
  for(let i=0; i< arrayTd.length; i++){
    arrayTd[i].className = '';
  }

  // Shuffle the newly created array of td elements
  arrayTd = arrayTd.sort(() => Math.random() - 0.5);

  // Picking a random number out of 16 numbers
  // in order to pick a random td element
  random = Math.floor(Math.random() * (16));
  randomTd = arrayTd[random];

  // Iterating the array to assign all elements
  // a frowning face image via css, added as a background image
  for(let i=0; i< arrayTd.length; i++){
    arrayTd[i].classList.add("frown_" + i);
  }

  // Removing all classes from the random td element
  // and addding a smiling face image class to it
  randomTd.className = ""; 
  randomTd.classList.add("smile_" + random);
  randomTd.addEventListener("click", cbmGame);
}

// Calling the function when the page first loads
cbmGame();
