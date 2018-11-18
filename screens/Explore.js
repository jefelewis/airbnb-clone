// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// React Native: Explore
export default class Explore extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Icon name="ios-search" size={20} style={styles.headerIcon} />
              <TextInput
                placeholder="Search California"
                placeholderTextColor="grey"
                style
              />
            </View>

          </View>
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
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    fontSize: 24,
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  headerIcon: {
    marginRight: 15,
  },
  headerText: {
    flex: 1,
    fontWeight: '700',
    backgroundColor: 'white',
  }
});
