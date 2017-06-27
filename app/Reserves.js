import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  ListView
} from 'react-native'
import MapView from 'react-native-maps'
import Data from './data/EqualWater.json'

var ds

 export default class Reserves extends Component {
   constructor(props) {
     super(props)
     this.state = {
       data: []
       }
     }
   }

   componentDidMount() {
      fetch("./data/EqualWater.json")
          .then( (response) => {
              return response.json() })
                  .then( (json) => {
                      this.setState({data: json});
                  });
   }

   render() {
     return (
       <View>

       </View>
     )
   }
 }
