const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const natureCard = document.querySelector('.cards .card:nth-child(1)')
const rainCard = document.querySelector('.cards .card:nth-child(2)')
const coffeeCard = document.querySelector('.cards .card:nth-child(3)')
const fireCard = document.querySelector('.cards .card:nth-child(4)')

const darkMode = document.querySelector('.dark-theme')
const lightMode = document.querySelector('.light-theme')
const body = document.querySelector('body')

const inputForestVolume = document.querySelector('#nature-volume')
const inputRainVolume = document.querySelector('#rain-volume')
const inputCoffeeShopVolume = document.querySelector('#coffee-volume')
const inputFireplaceVolume = document.querySelector('#fire-volume')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
  buttonIncrease,
  buttonDecrease,
  natureCard,
  rainCard,
  coffeeCard,
  fireCard,
  darkMode,
  lightMode,
  body,
  inputForestVolume,
  inputRainVolume,
  inputCoffeeShopVolume,
  inputFireplaceVolume,
}
