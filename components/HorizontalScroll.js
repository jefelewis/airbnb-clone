// Imports: Dependencies
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Imports: Components
import Category from '../components/Category';

// Component: Horizontal Scroll
export default class HorizontalScroll extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <Category imageUri={require('../assets/airbnb/home.jpg')} name="Home"/>
        <Category imageUri={require('../assets/airbnb/experiences.jpg')} name="Experiences" />
        <Category imageUri={require('../assets/airbnb/restaurant.jpg')} name="Restaurant" />
        <Category imageUri={require('../assets/airbnb/island.jpg')} name="Island Getaways" />
      </ScrollView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  horizontalScroll: {
    height: 130,
    marginTop: 20,
  },
});
