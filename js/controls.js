// FACTORY: É uma função que vai retornar um objeto
export default function Controls({
  playButton,
  pauseButton,
  stopButton,
  clockButton
}) {
  function play() {
    playButton.classList.add('hide')
    clockButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    stopButton.classList.remove('hide')
  }

  function pause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  }

  function reset() {
    stopButton.classList.add('hide')
    pauseButton.classList.add('hide')
    clockButton.classList.remove('hide')
    playButton.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }
    return newMinutes
  }
  return {
    play,
    pause,
    reset,
    getMinutes
  }
}


