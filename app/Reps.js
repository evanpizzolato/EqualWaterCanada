"use strict";

import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    ListView
} from 'react-native';

var ds;
var styles = require('./StyleSheet');

export default class Reps extends Component {

    constructor(props) {
        super(props);
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            title: 'Representatives',
            location: {
                lat: this.props.lat,
                lon: this.props.lon
            },
            dataSource: ds.cloneWithRows([]),
        };
    }

    componentDidMount = () => {
        fetch(`https://represent.opennorth.ca/representatives/?point=${this.state.location.lat}%2C${this.state.location.lon}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: ds.cloneWithRows(responseJson.objects)
            })
        })
        .catch((error) => {
            console.error(error);
        })
        .done();
    }

    render() {
        return (
            <View>
                <View style={styles.title}>
                    <Text style={[styles.h2, styles.textcenter]}>{this.state.title}</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={ (rowData) =>
                        <View style={[styles.flexRow, styles.listRow]}>
                            <Image
                                style={{width: 50, height: 50, borderRadius:25}}
                                source={{uri: rowData.photo_url}}/>
                            <View>
                                <Text style={[styles.h3, styles.textright]}>{rowData.name}</Text>
                                <Text style={[styles.text, styles.textright]}>{rowData.elected_office}, {rowData.district_name}</Text>
                            </View>

                        </View> }
                    enableEmptySections={true}
                />
            </View>
        );
    }
}
