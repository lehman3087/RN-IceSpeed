
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import Box from './Box';
import SplashScreen from "rn-splash-screen";

var NavBox = React.createClass({
  componentDidMount(){
    SplashScreen.hide();
  },

  renderScene: function(route, navigator) {
    var Component = route.component;

    return (
      <Component navigator={navigator} route={route} {...route.passProps} />
    );
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={{ flex: 1 }}
        renderScene={this.renderScene}
        initialRoute={{
          component: Box,
        }}
      />
    );
  }
});

module.exports =  NavBox;