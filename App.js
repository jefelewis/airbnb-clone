// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// React Native: App
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

// React Navigation: Bottom Tab Navigator
export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
  },
  Saved: {
    screen: Saved,
  },
  Trips: {
    screen: Trips,
  },
  Inbox: {
    screen: Inbox,
  },
  Profile: {
    screen: Profile,
  },
})

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
