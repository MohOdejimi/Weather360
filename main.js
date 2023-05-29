async function getWeather() {
  try {
    const API_KEY = '6f54916aa6f7ec8753539793bf70288b'
    const request = await fetch('https://api.openweathermap.org/data/2.5/forecast?q={Lagos}&appid=${API_KEY}&units=metric')
    const response = await request.json()
    console.log(response)
  } catch (e) {}
}
document.body.addEventListener('load', getWeather())