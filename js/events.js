import {
  playButton,
  pauseButton,
  stopButton,
  clockButton,
  soundOnButton,
  soundOffButton
} from './elements.js'

export default function ({ controls, timer, sound }) {
  playButton.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })

  pauseButton.addEventListener('click', function () {
    controls.pause()
    timer.pause()
    sound.pressButton()
  })

  stopButton.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  soundOnButton.addEventListener('click', function () {
    soundOffButton.classList.remove('hide')
    soundOnButton.classList.add('hide')
    sound.bgAudio.pause()
  })

  soundOffButton.addEventListener('click', function () {
    soundOffButton.classList.add('hide')
    soundOnButton.classList.remove('hide')
    sound.bgAudio.play()
  })

  clockButton.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
