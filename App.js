// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';


// Imports: Screens
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import Saved from './screens/Saved';
import Trips from './screens/Trips';

const AirbnbLogo = require('./assets/airbnb/airbnb.png');

// React Native: App
class App extends React.Component {
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
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-search" color={tintColor} size={24} />
      }
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-heart" color={tintColor} size={24} />
      }
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => {
        <Image source={require('./assets/airbnb/airbnb.png')} size={24} color={tintColor} style={styles.image}/>
      }
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-chatboxes" color={tintColor} size={24} />
      }
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => {
        <Ionicons name="ios-search" color={tintColor} size={24} />
      }
    }
  },
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
    }
  }
})

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
});
