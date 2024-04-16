import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import getSunRiseLightApi from '../api/sunRiseLightApi';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function sunRiseLightScreen() {
  const [dataSet, setDataSet] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);

  const getData = async () => {
    const rs = await getSunRiseLightApi();
    console.log(rs);
    setDataSet(rs.todayData[0]);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
    },
    subcontainer: {
      padding: 15,
    },
    table: {
      borderWidth: 0,
      // borderColor: "black",
      marginBottom: 10,
      marginTop: 30,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#fff",
    },
    cell: {
      flex: 1,
      padding: 10,
      // borderWidth: 1,
      textAlign: "left",
      fontSize: 18,
      color: darkTheme ? '#fff' : '#000',
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      color: '#fff',
    },
  });


  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subcontainer}>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>Date</Text>
              <Text style={styles.cell}>{dataSet[0]}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Sun Rise</Text>
              <Text style={styles.cell}>{dataSet[1]}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Solar Noon</Text>
              <Text style={styles.cell}>{dataSet[2]}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Sun Light</Text>
              <Text style={styles.cell}>{dataSet[3]}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

