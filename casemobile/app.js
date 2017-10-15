/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  
import Home from './src/components/home';
import {isAuthenticated} from './src/authentication'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {fetchServerDetails, getBaseURL} from './src/config.js';
import RouterComponent from './src/components/Router';

export default class casemobile extends Component {
  constructor(){
    super();
    console.log("started");
    this.state= {
      isLoading: true
    }
  }

  componentDidMount() {
    fetchServerDetails().then((value) => {
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    return (
        <View>
            <Home isAuthenticated = {isAuthenticated()}/>
        </View>,
        <RouterComponent />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


