// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';

// Imports: Components
import SearchBar from '../components/SearchBar';
import HorizontalScroll from '../components/HorizontalScroll';
import FeaturedCategory from '../components/FeaturedCategory';

// React Native: Explore
export default class Explore extends React.Component {
  constructor(props) {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.fuck}>
          <SearchBar />

          <ScrollView scrollEventThrottle={16}>
            <View style={styles.verticalScrollContainer}>
              <Text style={styles.text}>What can we help you find, Jeff?</Text>
              <HorizontalScroll />
              <FeaturedCategory />
            </View>
          </ScrollView>
        </View> 
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  fuck: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  verticalScrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
});
