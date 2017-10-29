import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import WhatToDo from './WhatToDo';
import Basics from './Basics';
import Props from './Props';
import State from './State';
import Style from './Style'; 
import HeightWidth from './HeightWidth';
import HeightWidth2 from './HeightWidth2';
import FlexBox from './FlexBox';
import TextInsert from './TextInsert';
import Touchables from './Touches';
import Scrollable from './ScrollView';
import ListViews from './ListViews';
import Networking from './Networking';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>React Native exercises</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={()=> navigate('state')} title="State"/>
        <Touchable onPress={()=> navigate('style')} title="Style"/>
        <Touchable onPress={()=> navigate('heightwidth')} title="Height & Width"/>
        <Touchable onPress={()=> navigate('heightwidth2')} title="Height & Width 2"/>
        <Touchable onPress={()=> navigate('flexbox')} title="FlexBox"/>
        <Touchable onPress={()=> navigate('textinsert')} title="Text Insert"/>
        <Touchable onPress={()=> navigate('touches')} title="Touchables"/>
        <Touchable onPress={()=> navigate('scrollview')} title="Scroll View"/>
        <Touchable onPress={()=> navigate('listview')} title="List View"/>
        <Touchable onPress={()=> navigate('networking')} title="Networking"/>
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: {screen: State},
  style: {screen: Style},
  heightwidth: {screen: HeightWidth},
  heightwidth2: {screen: HeightWidth2},
  flexbox: {screen: FlexBox},
  textinsert: {screen: TextInsert},
  touches: {screen: Touchables},
  scrollview: {screen: Scrollable},
  listview: {screen: ListViews},
  networking: {screen: Networking},
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})