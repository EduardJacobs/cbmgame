let shuffledArray, random_td, random;

// Get all td elements in collection and then convert it to an array
let arrayTd = [].slice.call(document.getElementsByTagName("td"));

// Shuffle the newly created array of td elements
shuffledArray = arrayTd.sort(() => Math.random() - 0.5);

// Picking a random number out of 16 numbers
// in order to pick a random td element
random = Math.floor(Math.random() * (16));
randomTd = shuffledArray[random];

// Iterating the array to assign all elements
// a frowning face image via css, added as a background image
for(let i=0; i< shuffledArray.length; i++){
  shuffledArray[i].classList.add("frown_" + i);
}

// Removing all classes from the random td element
// and addding a smiling face image class to it
randomTd.classList.remove(); 
randomTd.classList.add("smile_" + random);

// The page needs to be reloaded to have a new DOM
// since have manilulated it
randomTd.addEventListener("click", ()=>{
    location.reload();
});

