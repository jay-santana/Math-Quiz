document.addEventListener('DOMContentLoaded', function () {
  let fullscreenButton = null;

  function toggleFullscreenButton() {
    const fullscreenElement = document.fullscreenElement 
      || document.webkitFullscreenElement 
      || document.mozFullScreenElement 
      || document.msFullscreenElement;

    if (fullscreenElement) {
      if (!fullscreenButton) {
        fullscreenButton = document.createElement('div');
        fullscreenButton.classList.add('h5p-disable-fullscreen');
        fullscreenButton.setAttribute('role', 'button');
        fullscreenButton.setAttribute('title', 'Sair do modo tela cheia');
        fullscreenButton.addEventListener('click', () => document.exitFullscreen?.());
        fullscreenElement.appendChild(fullscreenButton);
      }
    } else {
      fullscreenButton?.remove();
      fullscreenButton = null;
    }
  }

  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
    .forEach(event => document.addEventListener(event, toggleFullscreenButton));
});


