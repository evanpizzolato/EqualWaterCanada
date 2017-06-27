
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import Reps from './app/Reps'
import Data from './data/EqualWater.json'

export default class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // data: [],
      region: {
        latitude: 43.728945,
        longitude: -79.606559,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
        title: 'Toronto, Ontario'
      }
    }
  }
 //  componentDidMount() {
 //     fetch("./data/EqualWater.json")
 //         .then( (response) => {
 //             return response.json() })
 //                 .then( (json) => {
 //                     this.setState({data: json});
 //                 });
 // }
  render() {
    return (
      <View style={styles.app}>
          <View style={styles.header}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text>Menu</Text>
                  <Text style={styles.h1}>EQUAL WATER</Text>
                  <Text>Menu</Text>
              </View>
          </View>
          <MapView
              style={{flex: 3}}
              initialRegion={this.state.region}
              onRegionChange={this.onRegionChange}
          />
          <View style={{flex: 2, backgroundColor: 'powderblue', paddingBottom: 35}}>
              <Reps lat={this.state.region.latitude} lon={this.state.region.longitude} />
          </View>
          <View>

          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  app: {
      flex: 1,
  },
  header: {
      height: 55,
      backgroundColor: 'firebrick',
      justifyContent: 'flex-end'
  },
  h1: {
      fontSize: 20,
      color: 'white',
      margin: 5,

      letterSpacing: 4
  }
})

AppRegistry.registerComponent('Maps', () => Maps);
