"use strict";

import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Modal,
    Button,
} from 'react-native';

import Reps from './Reps';

var styles = require('./StyleSheet');

export default class MarkerInfo extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                        <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.4)'}}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}></View>
                        <View style={{flex:1, backgroundColor: 'white'}}>
                            <Reps lat={this.props.lat} lon={this.props.long} />

                            <Button
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}
                                title="Close" />
                        </View>
                </Modal>
                <Text>{this.props.name}</Text>
                <Button
                    onPress={() => {
                        this.setModalVisible(true)
                    }}
                    title="Contact Rep" />
            </View>
        );
    }
}
