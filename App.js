"use strict";

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title
} from 'native-base';
import MapView from 'react-native-maps';
import Reps from './app/Reps';
import Reserves from './app/Reserves';

var styles = require('./app/StyleSheet');

export default class EqualWater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Equal Water',
            region: {
                latitude: 43.728945,
                longitude: -79.606559,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: 'Toronto, Ontario',
            },
        }
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'firebrick'}}
                        iosBarStyle='light-content'
                        searchBar>
                    <Left>
                        <Button light transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button light transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex:4 }}>
                    <Reserves  />
                </View>
            </Container>

            // <View style={styles.app}>
            //     <View style={[styles.title, {paddingTop: 20}]}>
            //         <View style={styles.flexRow}>
            //             <Text>Menu</Text>
            //             <Text style={styles.h1}>Equal Water</Text>
            //             <Text>Menu</Text>
            //         </View>
            //     </View>
            //     <View style={{flex: 3}}>
            //         <Reserves region={this.state.region} />
            //     </View>
            //     <View style={{flex: 1, paddingBottom: 25}}>
            //         <Reps lat={this.state.region.latitude} lon={this.state.region.longitude} />
            //     </View>
            // </View>
        );
    }
}

AppRegistry.registerComponent('EqualWater', () => EqualWater);
