// Imports: Dependencies
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Component: Scroll List Double
export default class ScrollListDouble extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Homes Around The World</Text>

        <View style={styles.list}>


          <View style={styles.listItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/airbnb/home.jpg')} style={styles.image} />
            </View>

            <View style={styles.text}>

            </View>
          </View>





        </View>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    width: width/2,
    height: width/2,
    borderWidth: 0.5,
    borderColor: '#dddddd',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
  },
});
