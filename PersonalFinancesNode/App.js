
import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.budgetContainer}>
          <Text style={styles.budgetText}>Balance: </Text>
          <Text style={styles.budgetText}>$1000</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text>To get started, edit App.js</Text>
        </View>
        <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#bcaaa4', marginBottom: 5, marginTop: 5, height: 1000, borderRadius: 10, width: width}}>
          <View style={styles.listSecContainer}>
            <Text>To get started, edit App.js</Text>
          </View>
          <View style={styles.listSecContainer}>
            <Text>To get started, edit App.js</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  budgetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00',
    marginBottom: 5,
    marginTop: 10,
    width: '95%',
    height: 50,
    borderRadius: 10,
  },
  budgetText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff3d00',
    marginBottom: 5,
    marginTop: 5,
    width: '95%',
    height: 50,
    borderRadius: 10,
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#bcaaa4',
    marginBottom: 5,
    marginTop: 5,
    height: 1000,
    borderRadius: 10,
  },
  listSecContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff3d00',
    marginBottom: 5,
    marginTop: 10,
    width: '95%',
    height: 50,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
