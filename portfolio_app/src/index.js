import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import axios from 'axios';
import Manu from './pages/Manu';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Carear from './pages/Carear';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Manu/>
    <Header/>
    <Carear/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// ##region weather
const body = document.querySelector("body");
const MIN_DURATION = 10;
function makeSnowFlake() {
  const snowFlake = document.createElement("div");
  const opacity = Math.random();
  const delay = Math.random() * 10;
  const duration = Math.random() * 20 + MIN_DURATION;

  snowFlake.classList.add("snow_flake");
  snowFlake.style.left = `${Math.random() * 100}vw`; // 고쳐야
  snowFlake.style.opacity = opacity;
  snowFlake.style.animation = `snow_falling ${duration}s linear ${delay}s`
  console.log(snowFlake.style.animation)

  body.appendChild(snowFlake);

  setTimeout(() => {
      body.removeChild(snowFlake);
      makeSnowFlake();
  }, (duration + delay) * 1000);
}

for(let i = 0; i < 80; i++) {
  setTimeout(makeSnowFlake(), 500 * i);
}

// function makeRaindrop() {
//   const raindrop = document.createElement("div");
//   const delay = Math.random() * 5;

//   raindrop.classList.add("raindrop");
//   raindrop.style.left = `${Math.random() * window.screen.width}px`;
//   raindrop.style.animation = `raining 5s linear ${delay}s`

//   body.appendChild(raindrop);

//   setTimeout(() => {
//     body.removeChild(raindrop);
//     makeRaindrop();
//   }, 10 * 1000);
// }



// axios 날씨 API
/*
  code doc : https://openweathermap.org/weather-conditions
  날씨 구분
  Rain : Rain, Drizzle, Thunderstorm
  Snow : Snow
  Clear : 기타 날씨
*/
const fetchData = async() => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=37.564214&lon=127.001699&appid=984a0b824bf625f4e6ff75eab63ff956`);
  return res;
}

// fetchData().then((res) => {
//   console.log(`WEATHER : ${res.data.weather[0].main}`)
//   switch(res.data.weather[0].main) {
//     case "Rain", "Drizzle", "Thunderstorm":
//       for(let i = 0; i < 80; i++) {
//         // setTimeout(makeRaindrop(), 500 * i);
//       }
//       break;
//     case "Snow":
//       for(let i = 0; i < 80; i++) {
//         // setTimeout(makeSnowFlake(), 500 * i);
//       }
//       break;
//     default:

//       break;
//   }
// })

