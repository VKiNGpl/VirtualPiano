document.addEventListener('keydown', (event) => {
  if (event.code == 'KeyA') {
    let audio = new Audio('audio/A.mp3');
    audio.play();
  }
  else if (event.code == 'KeyS') {
    let audio = new Audio('audio/S.mp3');
    audio.play();
  }
  else if (event.code == 'KeyD') {
    let audio = new Audio('audio/D.mp3');
    audio.play();
  }
  else if (event.code == 'KeyF') {
    let audio = new Audio('audio/F.mp3');
    audio.play();
  }
  else if (event.code == 'KeyG') {
    let audio = new Audio('audio/G.mp3');
    audio.play();
  }
  else if (event.code == 'KeyH') {
    let audio = new Audio('audio/H.mp3');
    audio.play();
  }
  else if (event.code == 'KeyJ') {
    let audio = new Audio('audio/J.mp3');
    audio.play();
  }
  else {
    console.log(`Unbound key is pressed!`);
  }
});
