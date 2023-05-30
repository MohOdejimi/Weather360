// Selectors
let city = document.querySelector('.city h4')
let currentImg = document.querySelector('.first-div img')
let description = document.querySelector('.description')
let minTemp = document.querySelector('.min')
let maxTemp = document.querySelector('.max')
let current_dateTime = document.querySelector('.dateTime')
let main = document.querySelector('.main')


// Hourly Forecasr Selectors

let div1Time = document.querySelector('.div1 p')
let div1Icon = document.querySelector('.div1 img')
let div1Temp = document.querySelector('.div1 h4')

let div2Time = document.querySelector('.div2 p')
let div2Icon = document.querySelector('.div2 img')
let div2Temp = document.querySelector('.div2 h4')

let div3Time = document.querySelector('.div3 p')
let div3Icon = document.querySelector('.div3 img')
let div3Temp = document.querySelector('.div3 h4')

let div4Time = document.querySelector('.div4 p')
let div4Icon = document.querySelector('.div4 img')
let div4Temp = document.querySelector('.div4 h4')

let div5Time = document.querySelector('.div5 p')
let div5Icon = document.querySelector('.div5 img')
let div5Temp = document.querySelector('.div5 h4')


// Time Converter 
function convertTime(timestamp, timezone) {
  const convertTimeZone = timezone/3600
  const date = new Date(timestamp * 1000)
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: `Etc/GMT${convertTimeZone >= 0 ? '-' : '+'}${Math.abs(convertTimeZone)}`,
    hour12: true
  }
  return date.toLocaleString('en-US', options)
}



function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(['en'],{type: 'region'})
  return regionNames.of(country)
}

async function getWeather(current_city) {
  try {
    
   // let current_city = 'Agege'
    console.log(current_city) 
    const API_KEY = '6f54916aa6f7ec8753539793bf70288b'
    // Current Weather
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${current_city}&appid=${API_KEY}&units=metric`)
    const response = await request.json()
    console.log(response)
    city.innerHTML = `${response.name}, ${convertCountryCode(response.sys.country)}`
    currentImg.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`
    main.innerHTML = response.main.temp.toFixed() + '&deg'
    description.innerHTML = response.weather[0].description
    minTemp.innerHTML = response.main.temp_min.toFixed() + '&deg' + '/'
    maxTemp.innerHTML = response.main.temp_max.toFixed() + '&deg'
    current_dateTime.innerHTML = convertTime(response.dt, response.timezone)
    
    
    // Hourly Forecast 
    
    const requestHour = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${current_city}&appid=${API_KEY}&units=metric`)
    const data = await requestHour.json()
    console.log(data)
    
    div1Time.innerHTML = data.list[0].dt_txt.split(' ')[1].slice(0, 5)
    div1Temp.innerHTML = data.list[0].main.temp.toFixed() + '&deg'
    div1Icon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`
    
    div2Time.innerHTML = data.list[1].dt_txt.split(' ')[1].slice(0, 5)
    div2Temp.innerHTML = data.list[1].main.temp.toFixed() + '&deg'
    div2Icon.src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@4x.png`
    
    div3Time.innerHTML = data.list[2].dt_txt.split(' ')[1].slice(0, 5)
    div3Temp.innerHTML = data.list[2].main.temp.toFixed() + '&deg'
    div3Icon.src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@4x.png`
    
    div4Time.innerHTML = data.list[3].dt_txt.split(' ')[1].slice(0, 5)
    div4Temp.innerHTML = data.list[3].main.temp.toFixed() + '&deg'
    div4Icon.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@4x.png`
    
    div5Time.innerHTML = data.list[4].dt_txt.split(' ')[1].slice(0, 5)
    div5Temp.innerHTML = data.list[4].main.temp.toFixed() + '&deg'
    div5Icon.src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@4x.png`
    
    
  } catch (e) {
    
  }
}
document.body.addEventListener('load', getLocation())


 function getLocation() {
  const accessKey = '91304e523c5cfdc10a86dee5e85a019c'; 
const apiUrl = `http://api.ipapi.com/api/check?access_key=${accessKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.keys(data))
    getWeather(data.city)
  })
}