import {
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonDecrease,
  buttonIncrease,
  natureCard,
  rainCard,
  coffeeCard,
  fireCard,
  lightMode,
  darkMode,
  body,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume
} from "./elements.js";

export default function events({ controls, timer, sound }) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  natureCard.addEventListener('click', function () {
    natureCard.classList.toggle('active')
    natureCard.classList.contains('active') ? sound.natureAudio.play() : sound.natureAudio.pause()
  })

  rainCard.addEventListener('click', function () {
    rainCard.classList.toggle('active')
    rainCard.classList.contains('active') ? sound.rainAudio.play() : sound.rainAudio.pause()
  })

  coffeeCard.addEventListener('click', function () {
    coffeeCard.classList.toggle('active')
    coffeeCard.classList.contains('active') ? sound.coffeeAudio.play() : sound.coffeeAudio.pause()
  })

  fireCard.addEventListener('click', function () {
    fireCard.classList.toggle('active')
    fireCard.classList.contains('active') ? sound.fireAudio.play() : sound.fireAudio.pause()
  })

  lightMode.addEventListener('click', function () {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
    body.classList.toggle('dark-mode')
  })

  darkMode.addEventListener('click', function () {
    darkMode.classList.toggle('hide')
    lightMode.classList.toggle('hide')
    body.classList.toggle('dark-mode')
  })
  buttonIncrease.addEventListener('click', function () {
    timer.increase()
  })

  buttonDecrease.addEventListener('click', function () {
    timer.decrease()
  })

  inputForestVolume.addEventListener('click', function (event) {
    event.stopPropagation();
    sound.natureAudio.volume = inputForestVolume.value
  });
  inputRainVolume.addEventListener('click', function (event) {
    event.stopPropagation();
    sound.rainAudio.volume = inputRainVolume.value
  });
  inputCoffeeShopVolume.addEventListener('click', function (event) {
    event.stopPropagation();
    sound.coffeeAudio.volume = inputCoffeeShopVolume.value
  });
  inputFireplaceVolume.addEventListener('click', function (event) {
    event.stopPropagation();
    sound.fireAudio.volume = inputFireplaceVolume.value
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateMinutes(newMinutes)
    timer.updateDisplay(newMinutes, 0)
  })
}
