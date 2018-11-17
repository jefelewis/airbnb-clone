// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Native: Trips
export default class Trips extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Trips</Text>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
