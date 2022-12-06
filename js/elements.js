const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const clockButton = document.querySelector('.clock')

const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
  playButton,
  pauseButton,
  stopButton,
  clockButton,
  soundOnButton,
  soundOffButton,
  minutesDisplay,
  secondsDisplay
}

// exportando variáveis de forma estruturada, para que possa ser  desestruturada no index.js. 
// export const elements = {
//   playButton,
//   pauseButton,
//   stopButton,
//   clockButton,
//   soundOnButton,
//   soundOffButton,
//   minutesDisplay,
//   secondsDisplay
// }