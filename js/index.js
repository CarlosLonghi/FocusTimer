// EcmaScript - ES6 modules
// NAMED IMPORT import {Timer} from './timer.js'
// DEFAULT IMPORT import Timer from './timer.js'

import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  playButton,
  pauseButton,
  stopButton,
  clockButton,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

// Desestruturando variáveis de um elemento importado
// import { elements } from './elements.js'
// const {
//   playButton,
//   pauseButton,
//   stopButton,
//   clockButton,
//   soundOnButton,
//   soundOffButton,
//   minutesDisplay,
//   secondsDisplay
// } = elements
// Funções construtoras (Factory)

const controls = Controls({
  playButton,
  pauseButton,
  stopButton,
  clockButton
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})
const sound = Sound()

Events({controls, timer, sound})
