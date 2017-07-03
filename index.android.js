/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header  from './src/components/header';
import Cases  from './src/components/cases';
import LoginForm from './src/components/LoginForm';

export default class caseApi extends Component {
  state = { loggedIn: true };

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loggedIn ? (
            <View>
              <Header text="Cases"/>
              <Cases />
            </View>
          ) :
          (
          <View>
            <Header text="Login"/>
            <LoginForm />
          </View>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
   }
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('caseApi', () => caseApi);
