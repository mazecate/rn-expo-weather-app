import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import MainCard from '../components/MainCard';
import InfoCard from '../components/InfoCard';
import getCurrentWeatherByFetch from '../api/fetchApi';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [english, setEnglish] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [location, setLocation] = useState('');
  const [currentHour, setCurrentHour] = useState('');

  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? '#fff' : '#000',
      fontSize: 50,
    },
    refreshButton: {
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView: {
      color: darkTheme ? 'black' : 'white',
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      width: 350,
      height: 230,
      marginTop: 30,
    },
    infoText: {
      color: darkTheme ? '#fff' : '#fff',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    infoCards: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton: {
      // backgroundColor: '#ff0000',
      width: 30,
      height: 30,
      borderRadius: 20,
    },
    circleButton: {
      // backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 20,
    },
    themeLanguageButton: {
      backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
      margin: 10,
      marginTop: -55,
      marginRight: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 25,
    },
    weatherIcon: {
      width: 100,
      height: 100,
      marginTop: 50,
    },
  });

  async function setCurrentWeather() {
    let date = new Date();
    setCurrentHour(date.getHours() + ':' + date.getMinutes());
    const rs = await getCurrentWeatherByFetch();
    console.log(rs);
    setCurrentTemperature(rs.currentTemperature);
    setTempMin(rs.temperatureMin);
    setTempMax(rs.temperatureMax);
    setLocation(rs.locationName);
    setWind(rs.wind);
    setHumidity(rs.humidity);
    setWeatherIcon(
      `https://openweathermap.org/img/wn/${rs.weatherIconId}@2x.png`
    );
  }

  useEffect(() => {
    setCurrentWeather();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.refreshButton}>
            <Feather
              name="refresh-ccw"
              size={24}
              color={darkTheme ? 'white' : 'black'}
              onPress={() => setCurrentWeather()}
            />
          </TouchableOpacity>

          <Image source={{ uri: weatherIcon }} style={styles.weatherIcon} />

          <View style={styles.temperature}>
            <Text style={styles.temperatureText}>{currentTemperature}</Text>
            <Text style={[styles.temperatureText, { fontSize: 14 }]}>°C</Text>
          </View>

          <Text style={[styles.temperatureText, { fontSize: 14 }]}>
            {location}, {currentHour}
          </Text>

          <View style={styles.info}>
            <Text style={styles.infoText}>
              {english ? 'More Info' : '更多資訊'}
            </Text>
            <View style={styles.infoCards}>
              <InfoCard
                title={english ? 'Wind' : '風速'}
                value={wind + ' m/h'}></InfoCard>
              <InfoCard
                title={english ? 'Humidity' : '濕度'}
                value={humidity + '%'}></InfoCard>
              <InfoCard
                title={english ? 'Temp. Min' : '最低溫度'}
                value={tempMin + ' °C'}></InfoCard>
              <InfoCard
                title={english ? 'Temp. Max' : '最高溫度'}
                value={tempMax + ' °C'}></InfoCard>
            </View>
          </View>

          <View style={styles.themeButton}>
            <View style={styles.squareButton}>
              <TouchableOpacity style={styles.circleButton}>
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={24}
                  color={darkTheme ? 'white' : 'black'}
                  onPress={() =>
                    darkTheme ? setDarkTheme(false) : setDarkTheme(true)
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.themeLanguageButton}>
            <TouchableOpacity
              onPress={() => (english ? setEnglish(false) : setEnglish(true))}>
              <FontAwesome5
                name="language"
                size={24}
                color={darkTheme ? 'black' : 'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
