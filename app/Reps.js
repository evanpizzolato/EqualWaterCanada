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

var ds

 export default class Reps extends Component {
   constructor(props) {
     super(props)
     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
     this.state = {
       title: 'Representatives',
       location: {
         lat: this.props.lat,
         lon: this.props.lon
       },
       dataSource: ds.cloneWithRows([]),
     }
   }

   componentDidMount = () => {
     fetch(`https://represent.opennorth.ca/representatives/?point=${this.state.location.lat}%2C${this.state.location.lon}`).then((response) => response.json()).then((responseJson) => {
       console.log(responseJson)
       this.setState({
         dataSource: ds.cloneWithRows(responseJson.objects)
       })
     })
     .catch((error) => {
       console.error(error)
     })
     .done()
   }

   render() {
     return (
       <View>
        <View>
          <Text style={styles.title}>{this.state.title.toUpperCase()}</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (rowData) =>
            <View style={styles.row}>
              <Image
                style={{width: 50, height: 50, borderRadius:25}}
                source={{uri: rowData.photo_url}}/>
              <View>
                <Text style={styles.name}>{rowData.name}</Text>
                <Text style={styles.right}>{rowData.elected_office}, {rowData.district_name}</Text>
              </View>
            </View> }
            enableEmptySections={true}
            />
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
     title: {
         fontSize: 14,
         paddingVertical: 5,
         letterSpacing: 2,
         textAlign: 'center',

         backgroundColor: 'firebrick',
         color: 'white'
     },
     name: {
         fontSize: 18,
         textAlign: 'right',

     },
     right: {
         textAlign: 'right',

     },
     row: {
         paddingHorizontal: 20,
         paddingVertical: 10,
         flexDirection: 'row',
         justifyContent: 'space-between',
         borderBottomColor: 'black',
         borderBottomWidth: 1
     }
 })
