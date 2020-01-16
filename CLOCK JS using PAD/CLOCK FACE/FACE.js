console.clear();

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

const base = 90;

let _seconds = base + ((360 / 60) * seconds);
let _minutes = base + ((360 / 60) * minutes);
let _hours = base + ((360 / 12) * hours);

const tick = () => {
  
  const time = new Date();
  
  _seconds += (360 / 60);
  _minutes += ((360 / 60) / 60);
  _hours += (((360 / 60) / 60) / 12);

  secondHand.style.transform = `rotate(${_seconds}deg)`;
  minuteHand.style.transform = `rotate(${_minutes}deg)`;
  hourHand.style.transform = `rotate(${_hours}deg)`;

}

setInterval(tick, 1000);