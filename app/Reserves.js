"use strict";

import React, { Component } from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import MapView from 'react-native-maps';

var styles = require('./StyleSheet');

export default class Reps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: this.props.region,
            data: require('../data/EqualWater.json'),
        };
    }

    render() {
        return (
            <MapView style={{flex: 3, paddingBottom: 25}}
                    initialRegion={this.state.region}
                    onRegionChange={this.onRegionChange}>
                {this.state.data.map( data => (
                    <MapView.Marker
                        coordinate={{
                            latitude: data.lat,
                            longitude:data.long
                        }}
                        title={data.name}
                        key={data.id}
                    />
                ))}
            </MapView>
        );
    }
}
