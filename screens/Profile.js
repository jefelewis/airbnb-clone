// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Native: Profile
export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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
