import React from 'react';
import {COLORS} from '../assets/theme';
import SalesLineChart from '../components/SalesLineChart';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    position: 'relative', // For absolute positioning
  },
  upperView: {
    flex: 0.35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperComponent: {
    padding: 20,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 120,
  },
  lowerView: {
    flex: 0.7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 120, // Clipping the top left corner
  },
  tornTopCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50, // Width of the torn fold
    borderTopWidth: 50, // Height of the torn fold
    borderLeftColor: 'transparent',
    borderTopColor: 'white',
  },
  card: {
    backgroundColor: '#3FF5E7',
    width: '80%',
    height: '10%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  cardText: {
    color: COLORS.primary,
  },
  smallSquareCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Spread the cards across the row
    marginBottom: 20, // Add margin between rows
  },
  smallSquareCard: {
    backgroundColor: '#3FF5E7',
    width: '40%', // Adjust the width as needed
    aspectRatio: 1, // This ensures the card stays square
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5, // Add a small margin between cards
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Upper View */}
      <View style={styles.upperView}>
        <View style={styles.upperComponent}>
          <TouchableOpacity>
            <SalesLineChart />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lower View */}
      <View style={styles.lowerView}>
        <View style={styles.tornTopCorner} />

        {/* New Row of Smaller Square Cards */}
        <View style={styles.smallSquareCardContainer}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="stats-chart" size={25} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="gift" size={25} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="person" size={25} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="options" size={25} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="cart" size={25} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.smallSquareCard}>
              <Ionic name="hammer" size={25} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Existing Cards */}
        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.cardText}>Sales</Text>
          <Ionic name="chevron-forward" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.cardText}>Products</Text>
          <Ionic name="chevron-forward" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.card}>
          <Text style={styles.cardText}>Staff</Text>
          <Ionic name="chevron-forward" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
