// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Imports: Components
import SearchBar from '../components/SearchBar';

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
        <SearchBar />
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
