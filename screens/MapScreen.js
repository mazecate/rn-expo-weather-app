import { Text, SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import getEarthQuakeApi from '../api/fetchEarthQuakeApi';

export default function MapScreen() {
  const [mapW, setMapW] = useState(0);
  const [mapH, setMapH] = useState(0);
  const [mapCoordinate, setMapCoordinate] = useState({latitude: 0, longitude: 0, latitudeDelta: 0.0922, longitudeDelta: 0.0421, });
  const [mapCircleCoordinate, setCircleCoordinate] = useState({latitude: 0, longitude: 0 });

  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#232634',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    map: {
      width: mapW,
      height: mapH,
    },
  });

  const getData = async () => {
    const rs = await getEarthQuakeApi();
    console.log(rs);
    setMapCoordinate(rs.coordinateWithDelta);
    setCircleCoordinate(rs.circleCoordinate);
  };

  useEffect(() => {
    getData();
    const win = Dimensions.get('window');
    setMapW(win.width);
    setMapH(win.height);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ flex: 1, lignItems: 'center', padding: 1 }}>
        <MapView
          style={Styles.map}
          region={mapCoordinate}
          >
            <Circle
              center={mapCircleCoordinate}
              radius={40}
              strokeColor={"#F00"}
              strokeWidth={25}
              fillColor={"#F00"}
            />
        </MapView>
      </View>
    </SafeAreaView>
  );
}
