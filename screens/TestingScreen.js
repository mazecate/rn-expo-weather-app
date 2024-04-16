import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';

function TestingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default TestingScreen; 