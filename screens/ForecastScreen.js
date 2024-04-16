import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import getNineDayForecastByFetch from '../api/fetchGovApiForecast';
import dayjs from 'dayjs';
// import * as Localization from 'expo-localization';
import i18n from '../i18n';
import { FontAwesome5 } from '@expo/vector-icons';

const WeatherForecastItem = ({ date, week, weather, maxTemp, minTemp, icon }) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.date}>
        {dayjs(date).format('YYYY-MM-DD')} ({week})
      </Text>
      <Text style={styles.weather}>{weather}</Text>
      <Text style={styles.temp}>
        最高溫度：{maxTemp.value}°{maxTemp.unit}
      </Text>
      <Text style={styles.temp}>
        最低溫度：{minTemp.value}°{minTemp.unit}
      </Text>
      <Image source={{ uri: `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${icon}.png` }} style={styles.icon} />
      <View style={styles.bottomLine}></View>
    </View>
  );
};

export default function ForecastScreen() {
  const [forecast, setForecast] = useState([]);

  const getData = async () => {
    const rs = await getNineDayForecastByFetch();
    console.log(rs);
    setForecast(rs.weatherForecast);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/*<View style={styles.themeLanguageButton}>
          <TouchableOpacity
            onPress={() => {
              console.log("2121");
              i18n.locale = 'zh';
              console.log(Localization.getLocales()[0].languageCode)
              console.log(Localization.getLocales())
            }}>
            <FontAwesome5
              name="language"
              size={24}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{i18n.t('welcome')} </Text>
        <Text style={styles.title}>{i18n.locale} </Text>
        <Text style={styles.title}>{Localization.getLocales()[0].languageCode} </Text>*/}
        <Text style={styles.title}>九天天氣預報</Text>
        <View
          style={{ flex: 1, lignItems: 'center', padding: 15, }}>
          {forecast.map((item) => (
            <WeatherForecastItem
              key={item.forecastDate}
              date={item.forecastDate}
              week={item.week}
              weather={item.forecastWeather}
              maxTemp={item.forecastMaxtemp}
              minTemp={item.forecastMintemp}
              icon={item.ForecastIcon}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 15,
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    color: '#fff',
  },
  boxContainer: {
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
    // borderStyle: 'solid',
    paddingTop: 15,
    color: '#fff',
    // paddingBottom: 15,
  },
  bottomLine: {
    height: 1,
    backgroundColor: '#FFF',
    marginbottom: 30,
    // paddingBottom: 20,
  },
  weather: {
    color: '#fff',
  },
  temp: {
    color: '#fff',
  },
  date: {
    color: '#fff',
  }
});
