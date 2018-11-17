// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Native: Inbox
export default class Inbox extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Inbox</Text>
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
