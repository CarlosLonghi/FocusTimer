import Sounds from './sounds.js'

// FACTORY
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes // 'se senão'
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    pause()
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let secondsClock = Number(secondsDisplay.textContent)
      let minutesClock = Number(minutesDisplay.textContent)
      let isFinished = minutesClock <= 0 && secondsClock <= 0

      updateDisplay(minutesClock, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }

      if (secondsClock <= 0) {
        secondsClock = 60
        --minutesClock
      }

      updateDisplay(minutesClock, String(secondsClock - 1))
      countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    //short hand
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    pause
  }
}
