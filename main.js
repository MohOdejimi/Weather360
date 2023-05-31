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


// Day selectors 

let day1 = document.querySelector('.day1 .day')
let day1description = document.querySelector('.day1 .description')
let day1Wind = document.querySelector('.day1 .wind')
let day1Icon = document.querySelector('.day1 img')
let day1MinTemp = document.querySelector('.day1 .min-temperature')
let day1MaxTemp = document.querySelector('.day1 .max-temperature')


let day2 = document.querySelector('.day2 .day')
let day2description = document.querySelector('.day2 .description')
let day2Wind = document.querySelector('.day2 .wind')
let day2Icon = document.querySelector('.day2 img')
let day2MinTemp = document.querySelector('.day2 .min-temperature')
let day2MaxTemp = document.querySelector('.day2 .max-temperature')

let day3 = document.querySelector('.day3 .day')
let day3description = document.querySelector('.day3 .description')
let day3Wind = document.querySelector('.day3 .wind')
let day3Icon = document.querySelector('.day3 img')
let day3MinTemp = document.querySelector('.day3 .min-temperature')
let day3MaxTemp = document.querySelector('.day3 .max-temperature')


let day4Wind = document.querySelector('.day4 .wind')
let day4 = document.querySelector('.day4 .day')
let day4description = document.querySelector('.day4 .description')
let day4Icon = document.querySelector('.day4 img')
let day4MinTemp = document.querySelector('.day4 .min-temperature')
let day4MaxTemp = document.querySelector('.day4 .max-temperature')

let day5 = document.querySelector('.day5 .day')
let day5Wind = document.querySelector('.day5 .wind')
let day5description = document.querySelector('.day5 .description')
let day5Icon = document.querySelector('.day5 img')
let day5MinTemp = document.querySelector('.day5 .min-temperature')
let day5MaxTemp = document.querySelector('.day5 .max-temperature')

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

// Search 
   document.querySelector('header i').addEventListener('click', () => {
  document.querySelector('.search-bar').style.display = 'block'
    })
   document.querySelector('.main-content').addEventListener('click', () => {
     document.querySelector('.search-bar').style.display = 'none'
   })
  document.querySelector('.day-section').addEventListener('click', () => {
     document.querySelector('.search-bar').style.display = 'none'
   })
   
   // Date Converter 
   function convertToDate(dateString) {
     const date = new Date(dateString);
     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const weekday = weekdays[date.getDay()];
     return weekday;
   }
   
  
  


const searchInput = document.querySelector('input');
function handleKey(event) {
  if (event.key === 'Enter') {
    const searchValue = searchInput.value.trim();
    if (searchValue) {
      getWeather(searchValue);
      searchInput.value = ''
    }
  }
}

searchInput.addEventListener('keydown', handleKey)



async function getWeather(current_city) {
  try {
    
   // let current_city = 'Agege'
    console.log(current_city) 
    const API_KEY = '6f54916aa6f7ec8753539793bf70288b'
    // Current Weather
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${current_city}&appid=${API_KEY}&units=metric`)
    const response = await request.json()
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
    
    
    // Day section 
    let date1 = convertToDate(data.list[6].dt_txt.split(' ')[0])
    day1.textContent = date1
    day1Wind.innerHTML = data.list[8].wind.speed
   day1Icon.src = `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`
   day1description.innerHTML = data.list[8].weather[0].description
    day1MinTemp.innerHTML = data.list[8].main.temp_min.toFixed() +  '&deg' + '/' 
    day1MaxTemp.innerHTML = data.list[8].main.temp_max.toFixed() + '&deg'
    
    
    
    day2Wind.innerHTML = data.list[16].wind.speed
    day2.textContent = convertToDate(data.list[16].dt_txt.split(' ')[0])
    day2Icon.src = `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`
   day2description.innerHTML = data.list[16].weather[0].description
    day2MinTemp.innerHTML = data.list[16].main.temp_min.toFixed() +  '&deg' + '/' 
    day2MaxTemp.innerHTML = data.list[16].main.temp_max.toFixed() + '&deg'
    
    
    day3Wind.innerHTML = data.list[24].wind.speed
   day3.textContent = convertToDate(data.list[24].dt_txt.split(' ')[0])
    day3.textContent = convertToDate(data.list[24].dt_txt.split(' ')[0])
    day3Icon.src = `http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}@2x.png`
   day3description.innerHTML = data.list[24].weather[0].description
    day3MinTemp.innerHTML = data.list[24].main.temp_min.toFixed() +  '&deg' + '/' 
    day3MaxTemp.innerHTML = data.list[24].main.temp_max.toFixed() + '&deg'
    
    
    day4Wind.innerHTML = data.list[32].wind.speed
    day4.textContent = convertToDate(data.list[32].dt_txt.split(' ')[0])
    day4Icon.src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`
   day4description.innerHTML = data.list[32].weather[0].description
    day4MinTemp.innerHTML = data.list[32].main.temp_min.toFixed() +  '&deg' + '/' 
    day4MaxTemp.innerHTML = data.list[32].main.temp_max.toFixed() + '&deg'
    
    
    day5Wind.innerHTML = data.list[39].wind.speed
   day5.textContent = convertToDate(data.list[39].dt_txt.split(' ')[0])
    day5Icon.src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`
   day5description.innerHTML = data.list[39].weather[0].description
    day5MinTemp.innerHTML = data.list[39].main.temp_min.toFixed() +  '&deg' + '/' 
    day5MaxTemp.innerHTML = data.list[39].main.temp_max.toFixed() + '&deg'
    
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