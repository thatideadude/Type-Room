let input = document.getElementById('js-input-element'),
    render = document.querySelector('.js-text-span'),
    textrender = '',
    text,
    timeoutId,
    bgNumber = 1,
    section = document.querySelector('body'),
    typingSounds = 1;
    atmos = 1,
    previousAtmos = 0;

const iconsDiv = document.querySelector('.js-icons');


//Makes sure that we can always type on loading the page the first time 
input.focus();
input.select();


//Makes sure that after we use the buttons, we can start writing right away
window.addEventListener('click', () => {
  input.focus();
});


//Plays key sounds, crosses out words and introduces <br> on render
input.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    document.getElementById(`return-${typingSounds}`).play();
    input.value = input.value + " <br>";
    crossoutLastWord();

  } else if (event.key === "Backspace") {
    event.preventDefault()
    crossoutLastWord();

  } else {
    document.getElementById(`keypress-${typingSounds}.${generateRandomNumber()}`).play();
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 10)
};

//This function adds a span to the last word/s(so we can style it/them in CSS). First it converts the textarea.value into an array, then checks if the last value of the array is already styled or not.
function crossoutLastWord() {

  text = input.value.split(" ");
  text.reverse();
  let newText = [];
  let loopCount = 1;

  text.forEach((word) => {
    if (!word.includes('</span>') && word !== '' && loopCount === 1) {
      word = `<span>${word}</span>`;
      newText.push(word);
      loopCount++;
    } else if (word === ' ') {
      text.splice(indexOf(word));
    } else {
      newText.push(word);
    }
  })

  newText.reverse();
  text = newText.join(" ");
  input.value = text + ' ';
}

//Shows bottom icons when moving the mouse
window.addEventListener("mousemove", () => {
  iconsDiv.classList.add('mouse-movement');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => { iconsDiv.classList.remove('mouse-movement'); section.style.cursor = "none"; }, 2000);
  section.style.cursor = "default";

  bgSizeX = (120 + Number(`0.${event.x}`) * 8);
  body.style.backgroundSize = `${bgSizeX}% ${bgSizeX}%`;
});

//Flashes icons when clicked 
flashIcon = (id) => {
  document.querySelector(`.js-icon-${id}`).classList.add('clicked');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => { document.querySelector(`.js-icon-${id}`).classList.remove('clicked') }, 150);
};

//Loops through backgrounds and font stylings 
changeBackground = () => {

  const images = [
    'url("1.jpg")',
    'url("2.jpg")',
    'url("3.jpg")',
    'url("4.jpg")',
    'url("5.jpg")',
  ]

  section.style.backgroundImage = images[bgNumber];

  if (bgNumber < 4) {
    bgNumber++
  } else {
    bgNumber = 0;
  }
  changeTypingStyles();
  updateIcons()
}

//Updates icons for when the background image changes
function updateIcons() {
  document.getElementById('js-icon-1')
    .src = `images/keyboard-${bgNumber}.png`;
  document.getElementById('js-icon-2')
    .src = `images/playarrow-${bgNumber}.png`;
  document.getElementById('js-icon-3')
    .src = `images/bgimage-${bgNumber}.png`;
  document.getElementById('js-icon-4')
    .src = `images/fullscreenon-${bgNumber}.png`;
  document.getElementById('js-icon-5')
    .src = `images/download-${bgNumber}.png`;
}

//Matches font style with background images
function changeTypingStyles() {
  if (bgNumber === 0) {
    document.getElementById('js-text-span')
      .classList.remove('text-span-4');
    document.getElementById('js-text-span')
      .classList.add('text-span-5')
  } else if (bgNumber === 1) {
    document.getElementById('js-text-span')
      .classList.remove('text-span-5');
    document.getElementById('js-text-span')
      .classList.add('text-span-1')
  } else {
    const oldBgNum = bgNumber - 1;
    document.getElementById('js-text-span')
      .classList.remove(`text-span-${oldBgNum}`);
    document.getElementById('js-text-span')
      .classList.add(`text-span-${bgNumber}`);
  }
}

//Fullscreen button on/off
document.querySelector('.js-icon-4')
  .addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById('js-icon-4')
        .src = `images/fullscreenoff-${bgNumber}.png`;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      document.getElementById('js-icon-4')
        .src = `images/fullscreenon-${bgNumber}.png`
    }
  });

//Plays diffent atmospheres 
document.querySelector('.js-icon-2').addEventListener('click', () => {
  playAtmos();
  changeAtmosIcon();
  atmos++;
  previousAtmos++;

  if (atmos === 6 && previousAtmos === 5) {
    atmos = 1;
    previousAtmos = 0
  }
});

function playAtmos() {
  if (atmos === 1) {
    document.getElementById(`ambient-${atmos}`).play()

  } else if (atmos === 2 || atmos === 3 || atmos === 4) {
    document.getElementById(`ambient-${previousAtmos}`).pause();
    document.getElementById(`ambient-${atmos}`).play()

  } else if (atmos === 5) {
    document.getElementById('ambient-4').pause();
  }
};

function changeAtmosIcon() {
  if (atmos === 5) {
    document.getElementById('js-icon-2')
      .src = `images/mute-${bgNumber}.png`;
  } else {
    document.getElementById('js-icon-2')
      .src = `images/playarrow-${bgNumber}.png`;
  }
};

//Browses through typewriter sounds
document.querySelector('.js-icon-1').addEventListener('click', () => {
  if (typingSounds === 3) {
    typingSounds = 1;
    document.getElementById('js-icon-1')
      .src = `images/keyboard-${bgNumber}.png`;

  } else if (typingSounds === 2) {
    typingSounds++;
    document.getElementById('js-icon-1')
      .src = `images/mute-${bgNumber}.png`;

  } else if (typingSounds === 1) {
    typingSounds++;
    document.getElementById('js-icon-1')
      .src = `images/keyboard-${bgNumber}.png`;
  }
});
