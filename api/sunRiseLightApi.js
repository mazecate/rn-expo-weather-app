import dayjs from 'dayjs';
const getSunRiseLightApi = async () => {
  console.log("fn::getSunRiseLight");
  let y = dayjs().year();
  let m = dayjs().month() + 1;
  let d = dayjs().date();
  let url = `https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=SRS&rformat=json&year=${y}&month=${m}&day=${d}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const { fields, data:todayData } = data;
  return {
    fields, todayData
  };
}

export default getSunRiseLightApi; 