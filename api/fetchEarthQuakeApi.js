const getEarthQuakeApi = async () => {
  console.log('fn::getEarthQuakeApi');
  let lang = 'en';
  let dataType = 'qem';
  let url = `https://data.weather.gov.hk/weatherAPI/opendata/earthquake.php?dataType=${dataType}&lang=${lang}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const { lat, lon, mag, region, ptime, updateTime } = data;

  return {
    coordinate: {
      latitude: lat,
      longitude: lon,
    },
    coordinateWithDelta: {
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    circleCoordinate: {
      latitude: lat,
      longitude: lon,
    },
    testingCoord: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    lat,
    lon,
    mag,
    region,
    ptime,
    updateTime,
  };
};

export default getEarthQuakeApi;
