let input = document.getElementById('js-input-element'),
    render = document.querySelector('.js-text-span'),
    textrender = '',
    text,
    timeoutId,
    timeoutId2,
    bgNumber = 1,
    section = document.querySelector('body'),
    typingSounds = 1;
    atmos = 1,
    previousAtmos = 0;
    fullscreen = 'off';

const iconsDiv = document.querySelector('.js-icons');


//Makes sure that we can always type on loading the page the first time 
input.focus();
input.select();

window.onload = () => {
  input.onpaste = e => e.preventDefault();
};

//Makes sure that after we use the buttons, we can start writing right away
window.addEventListener('click', () => {
  input.focus();
  iconsDiv.classList.add('mouse-movement');
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => { iconsDiv.classList.remove('mouse-movement'); section.style.cursor = "none"; }, 2000);
});


//Plays key sounds, crosses out words and introduces <br> on render
input.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    document.getElementById(`return-${typingSounds}`).play();
    input.value = input.value + " <br>";

  } else if (event.key === "Backspace") {
    event.preventDefault()
    crossoutLastWord();
  } else if (event.key === 'CapsLock'
      || event.key === 'Shift'
      || event.key === 'Tab'
      || event.key === 'Backquote'
      || event.key === 'ControlLeft'
      || event.key === 'ControlRight'
      || event.key === 'Meta'
      || event.key === 'ArrowDown'
      || event.key === 'ArrowRight'
      || event.key === 'ArrowUp'
      || event.key === 'ArrowLeft'
      || event.key === 'Home'
      || event.key === 'PageDown'
      || event.key === 'PageUp'
      || event.key === 'Clear'
      || event.key === 'Copy'
      || event.key === 'Cut'
      || event.key === 'Delete'
      || event.key === 'EraseEof'
      || event.key === 'Paste'
      || event.key === 'Undo'
      || event.key === '>'
      || event.key === '<'
      || event.key === 'AltLeft'
      || event.key === 'AltRight'
      || event.key === 'Escape'
    ) {
    event.preventDefault();
  } else {
    document.getElementById(`keypress-${typingSounds}.${generateRandomNumber()}`).play();
  }
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 10)
};

//Adds a span to the last word/s(so we can style it/them in CSS). First it converts the textarea.value into an array, then checks if the last value of the array is already styled or not.
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
  clearTimeout(timeoutId2);
  timeoutId2 = setTimeout(() => { document.querySelector(`.js-icon-${id}`).classList.remove('clicked') }, 200);
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
    bgNumber++;
  } else {
    bgNumber = 0;
  }
  changeTypingStyles();
  updateIcons();
  updateTooltipStyles();
}

//Updates icons for when the background image changes
function updateIcons() {
  if (bgNumber === 0) {
    document.getElementById('js-icon-1')
      .classList.remove("image-style-4");
    document.getElementById('js-icon-1')
      .classList.add("image-style-white");
    document.getElementById('js-icon-2')
      .classList.remove("image-style-4");
    document.getElementById('js-icon-2')
      .classList.add("image-style-white");
    document.getElementById('js-icon-3')
      .classList.remove("image-style-4");
    document.getElementById('js-icon-3')
      .classList.add("image-style-white");
    document.getElementById('js-icon-4')
      .classList.remove("image-style-4");
    document.getElementById('js-icon-4')
      .classList.add("image-style-white");
    document.getElementById('js-icon-5')
      .classList.remove("image-style-4");
    document.getElementById('js-icon-5')
      .classList.add("image-style-white");

  } else if (bgNumber === 1) {
    document.getElementById('js-icon-1')
      .classList.remove("image-style-5");
    document.getElementById('js-icon-1')
      .classList.add("image-style-white");
    document.getElementById('js-icon-2')
      .classList.remove("image-style-5");
    document.getElementById('js-icon-2')
      .classList.add("image-style-white");
    document.getElementById('js-icon-3')
      .classList.remove("image-style-5");
    document.getElementById('js-icon-3')
      .classList.add("image-style-white");
    document.getElementById('js-icon-4')
      .classList.remove("image-style-5");
    document.getElementById('js-icon-4')
      .classList.add("image-style-white");
    document.getElementById('js-icon-5')
      .classList.remove("image-style-5");
    document.getElementById('js-icon-5')
      .classList.add("image-style-white");
  } else {
    const oldBgNum = bgNumber - 1;
    document.getElementById('js-icon-1')
      .classList.remove(`image-style-${oldBgNum}`);
    document.getElementById('js-icon-1')
      .classList.add("image-style-white");
    document.getElementById('js-icon-2')
      .classList.remove(`image-style-${oldBgNum}`);
    document.getElementById('js-icon-2')
      .classList.add("image-style-white");
    document.getElementById('js-icon-3')
      .classList.remove(`image-style-${oldBgNum}`);
    document.getElementById('js-icon-3')
      .classList.add("image-style-white");
    document.getElementById('js-icon-4')
      .classList.remove(`image-style-${oldBgNum}`);
    document.getElementById('js-icon-4')
      .classList.add("image-style-white");
    document.getElementById('js-icon-5')
      .classList.remove(`image-style-${oldBgNum}`);
    document.getElementById('js-icon-5')
      .classList.add("image-style-white");
  }

  setTimeout(() => {
    if (bgNumber === 0) {
      document.getElementById('js-icon-1')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-1')
        .classList.add("image-style-5");
      document.getElementById('js-icon-2')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-2')
        .classList.add("image-style-5");
      document.getElementById('js-icon-3')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-3')
        .classList.add("image-style-5");
      document.getElementById('js-icon-4')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-4')
        .classList.add("image-style-5");
      document.getElementById('js-icon-5')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-5')
        .classList.add("image-style-5");

    } else if (bgNumber === 1) {
      document.getElementById('js-icon-1')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-1')
        .classList.add("image-style-1");
      document.getElementById('js-icon-2')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-2')
        .classList.add("image-style-1");
      document.getElementById('js-icon-3')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-3')
        .classList.add("image-style-1");
      document.getElementById('js-icon-4')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-4')
        .classList.add("image-style-1");
      document.getElementById('js-icon-5')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-5')
        .classList.add("image-style-1");
    } else {
      const oldBgNum = bgNumber - 1;
      document.getElementById('js-icon-1')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-1')
        .classList.add(`image-style-${bgNumber}`);
      document.getElementById('js-icon-2')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-2')
        .classList.add(`image-style-${bgNumber}`);
      document.getElementById('js-icon-3')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-3')
        .classList.add(`image-style-${bgNumber}`);
      document.getElementById('js-icon-4')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-4')
        .classList.add(`image-style-${bgNumber}`);
      document.getElementById('js-icon-5')
        .classList.remove("image-style-white");
      document.getElementById('js-icon-5')
        .classList.add(`image-style-${bgNumber}`);
    }
  });
};

function updateTooltipStyles() {

  document.querySelectorAll('.js-button')
    .forEach((button) => {
      if (bgNumber === 0) {
        button.classList.remove('button-style-4');
        button.classList.add('button-style-5');
      } else if (bgNumber === 1) {
        button.classList.remove('button-style-5');
        button.classList.add('button-style-1');
      } else {
        const oldBgNum = bgNumber - 1;
        button.classList.remove(`button-style-${oldBgNum}`);
        button.classList.add(`button-style-${bgNumber}`);
      }
    })
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
  document.getElementById('button-4')
    .addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.getElementById('js-icon-4')
          .src = `images/fullscreenoff.png`;
        document.getElementById('js-icon-4')
          .classList.add(`image-style-${bgNumber}`);
          updateFullscreenTooltip();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById('js-icon-4')
          .src = `images/fullscreenon.png`
        document.getElementById('js-icon-4')
          .classList.add(`image-style-${bgNumber}`);
          updateFullscreenTooltip();
      }
    });

  //Plays diffent atmospheres 
  document.getElementById('button-2').addEventListener('click', () => {
    updateAmbienceTooltip();
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
        .src = `images/mute.png`;
    } else {
      document.getElementById('js-icon-2')
        .src = `images/playarrow.png`;
    }
    document.getElementById('js-icon-2')
      .classList.remove(`image-style-${bgNumber}`);
    document.getElementById('js-icon-2')
      .classList.add(`image-style-${bgNumber}`);
  };

  //Browses through typewriter sounds
  document.getElementById('button-1').addEventListener('click', () => {
    updateKeysTooltip();
    if (typingSounds === 3) {
      typingSounds = 1;
      document.getElementById('js-icon-1')
        .src = `images/keyboard.png`;

    } else if (typingSounds === 2) {
      typingSounds++;
      document.getElementById('js-icon-1')
        .src = `images/mute.png`;

    } else if (typingSounds === 1) {
      typingSounds++;
      document.getElementById('js-icon-1')
        .src = `images/keyboard.png`;
    }
    document.getElementById('js-icon-1')
      .classList.remove(`image-style-${bgNumber}`);
    document.getElementById('js-icon-1')
      .classList.add(`image-style-${bgNumber}`);
  });

//Change tootlip
function updateKeysTooltip() {
  const tooltip = document.getElementById('button-1');
if (typingSounds === 3) {
  tooltip.setAttribute('data-tooltip', 'change keys');
} else if (typingSounds === 1) {
  tooltip.setAttribute('data-tooltip', 'change keys');
} else if (typingSounds === 2) {
  tooltip.setAttribute('data-tooltip', 'muted keys')
}
};

function updateAmbienceTooltip() {
  const tooltip = document.getElementById('button-2');
  if (atmos === 4) {
    tooltip.setAttribute('data-tooltip', 'cafe');
  } else if (atmos === 1) {
    tooltip.setAttribute('data-tooltip', 'rain');
  } else if (atmos === 2) {
    tooltip.setAttribute('data-tooltip', 'fireplace');
  } else if (atmos === 3) {
    tooltip.setAttribute('data-tooltip', 'ocean');
  } else {
    tooltip.setAttribute('data-tooltip', 'no ambience');
  }
};

function updateFullscreenTooltip() {
  const tooltip = document.getElementById('button-4');
  if (fullscreen === 'off') {
    tooltip.setAttribute('data-tooltip', 'exit fullscren');
    fullscreen = 'on';
  } else {
    tooltip.setAttribute('data-tooltip', 'fullscreen');
    fullscreen = 'off';
  }
  };

  function downloadFile(filename, content) {

    const element = document.createElement('a');

    const blob = new Blob ([content], {
      type: 'plain/text'
    });

    const fileURL = URL.createObjectURL(blob);

    element.setAttribute('href', fileURL);
    element.setAttribute('download', filename);

    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
  };


    document.getElementById('button-5').addEventListener('click', e => {
      const filename = 'New Document.txt';
      const content = input.value;

    if (content) {
      downloadFile(filename, content);
    }  
    })
