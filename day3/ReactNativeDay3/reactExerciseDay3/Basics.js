import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';

//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise
export default class Basics extends React.Component {
    static navigationOptions = { title: "Learn the Basics" }

    render() {
      return (<View><Text>Learn The Bacics</Text></View>)
    }
  }