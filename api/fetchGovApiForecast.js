const getNineDayForecastByFetch = async () => {
  console.log("fn::getNineDayForecastByFetch");
  let url = `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc`;
  const resp = await fetch(url);
  const data = await resp.json();
  const { generalSituation, weatherForecast, updateTime, seaTemp, soilTemp } = data;
  return {
    generalSituation, weatherForecast, updateTime, seaTemp, soilTemp
  };
}

export default getNineDayForecastByFetch; 