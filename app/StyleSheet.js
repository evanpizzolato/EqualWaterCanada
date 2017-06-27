"use strict";

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

var colors = {
    'primary' : 'firebrick',
    'secondary' : 'darkslateblue',
    'background' : 'whitesmoke',
    'text': 'dimgray',
    'textinv' : 'white'
};

module.exports = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        paddingVertical: 5,
        backgroundColor: colors.primary,
    },
    h1: {
        fontSize: 20,
        color: colors.textinv
    },
    h2: {
        fontSize: 14,
        color: colors.textinv
    },
    h3: {
        fontSize: 18,
        color: colors.text
    },
    text: {
        color: colors.text
    },
    textcenter: {
        textAlign: 'center'
    },
    textright: {
        textAlign: 'right'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listRow: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    // header: {
    //     height: 55,
    //     backgroundColor: colors.red,
    //     justifyContent: 'flex-end'
    // },
    // h1: {
    //     fontSize: 20,
    //     color: 'white',
    //     margin: 5,
    //     //fontFamily: 'Avenir Next',
    //     letterSpacing: 4
    // },
    // title: {
    //     fontSize: 14,
    //     paddingVertical: 5,
    //     letterSpacing: 2,
    //     textAlign: 'center',
    //     //fontFamily: 'Avenir Next',
    //     backgroundColor: colors.red,
    //     color: 'white'
    // },
    // name: {
    //     fontSize: 18,
    //     textAlign: 'right',
    //     color: 'lightslategrey'
    //     //fontFamily: 'Avenir Next'
    // },
    // right: {
    //     textAlign: 'right',
    //     color: 'lightslategrey'
    //     //fontFamily: 'AvenirNextCondensed-Italic'
    // },
    // row: {
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     borderBottomColor: 'lightslategrey',
    //     borderBottomWidth: 1
    // }
});
