
//1. Idetify what initial face dice is: you need to check the face so you can change it ramdomly. 

//2. Change the dice image ramdomly: imagine that each face of the dice is an image, so, everytime you want it to change, you change the image. 

//3. Define each dice face as a class. You will call these classes each time you press the button.


// **** REFERENCES
// querySelect the img.face in the document 
const $face = document.querySelector('.face');

//Look for the .result output
const $result = document.querySelector('.result');

//Lokk for the .roll button
const $btn = document.querySelector('.btn');

// **** LOGIC FUNCTIONS

const rollTheDice = () => {
// A random Number between 1 and 6, inclusive
let roll = Math.floor(Math.random() * 6) + 1;

// Change the value of the 'src' attribute of the .face image
$face.className=`face dice${roll}`;

//Change the value of the content within to reflect the new roll
//If Statment
// - Must have an "if" statment to start (first case to evaluate)
// - May have 0 or any "else if" (more specific cases)
// - May end with an "else" (catch all)

if (roll === 1) {
  $result.textContent = `one`
} else if (roll === 2) {
  $result.textContent = `two`
} else if (roll === 3) {
  $result.textContent = `three`
} else if (roll === 4) {
  $result.textContent = `four`
} else if (roll === 5) {
  $result.textContent = `five`
} else 
 $result.textContent = `six` 
};

// **** EVENT LISTENERS

//Listen for the .roll button to be clicked
$btn.addEventListener('click', rollTheDice);
// window.addEventListener(`scroll`, () => console.log(`Scrolled`));

//Do the first roll
rollTheDice()




