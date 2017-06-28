"use strict";

import React, { Component } from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import MapView from 'react-native-maps';

import MarkerInfo from './MarkerInfo';

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
            <MapView
                style={{flex:1}}
                initialRegion={this.state.region} >
                {this.state.data.map( data => (
                    <MapView.Marker
                        key={data.id}
                        coordinate={{
                            latitude: data.lat,
                            longitude: data.long,
                        }}>
                        <MapView.Callout>
                            <MarkerInfo {...data} />
                        </MapView.Callout>
                    </MapView.Marker>
                ))}
            </MapView>
        );
    }
}
