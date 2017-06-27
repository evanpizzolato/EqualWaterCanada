"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Reps from './app/Reps';
import Reserves from './app/Reserves';

var styles = require('./app/StyleSheet');

export default class EqualWater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 43.728945,
                longitude: -79.606559,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: 'Toronto, Ontario'
            },
        }
    }
    render() {
        return (
            <View style={styles.app}>
                <View style={[styles.title, {paddingTop: 20}]}>
                    <View style={styles.flexRow}>
                        <Text>Menu</Text>
                        <Text style={styles.h1}>Equal Water</Text>
                        <Text>Menu</Text>
                    </View>
                </View>
                <View style={{flex: 3}}>
                    <Reserves/>
                </View>
                <View style={{flex: 1, paddingBottom: 25}}>
                    <Reps lat={this.state.region.latitude} lon={this.state.region.longitude} />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('EqualWater', () => EqualWater);
