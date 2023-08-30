import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {COLORS} from '../assets/theme';
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: COLORS.primary}}>Home</Text>
      </View>
    </ScrollView>
  );
};
export default Home;
