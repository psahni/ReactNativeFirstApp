import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Button } from './common'

// Make a component

export default class Header extends Component {

  constructor({ getScreenText, userLoggedIn, setLogout }) {
    super();
    this.getScreenText = getScreenText;
    this.userLoggedIn = userLoggedIn;
    this.setLogout = setLogout;
  }

  renderComponent() {
    const components = [];
    console.log("Rendering Header....", this.getScreenText());
    components.push(
      <Text key="headerText" style={styles.textStyle}>{this.getScreenText()}</Text>
    )
    if (this.userLoggedIn()) {
      components.push(
        <Text key="logout" onPress={this.setLogout} style={styles.logoutButtonStyle}>
          Log Out
        </Text>
      )
    }

    return components;
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderComponent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    height: 60,
    paddingTop: 10
  },
  logoutButtonStyle: {
    fontSize: 12,
    color: 'white',
    position: 'relative',
    marginRight: 10,
    textAlign: 'right'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  }
});
