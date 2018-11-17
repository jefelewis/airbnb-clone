// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Native: Saved
export default class Saved extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saved</Text>
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
