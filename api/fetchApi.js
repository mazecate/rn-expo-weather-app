export default async function getCurrentWeatherByFetch() {
  console.log("fn::getCurrentWeatherByFetch");
  const lat = 22.302711;
  const lon = 114.177216;
  let apiKey = "f0d5056f8d90f55cc6f5e4dfc813e66a";
  let units = "metric";
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  const locationName = data.sys.country + ", " + data.name;
  const temperatureMin = data.main.temp_min;
  const temperatureMax = data.main.temp_max;
  const wind = data.wind.speed;
  const humidity = data.main.humidity;
  const currentTemperature = data.main.temp;
  const weatherIconId = data.weather[0].icon;

  let result = {
    currentTemperature,
    temperatureMin,
    temperatureMax,
    locationName,
    wind,
    humidity,
    weatherIconId,
  };
  return result;
}