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

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.renderComponent = this.renderComponent.bind(this);

    this.state = { loggedIn: false };
  }

  login() {
    console.log("logging....");
    this.setState({ loggedIn: true });
    console.log(this.state.loggedIn);
  }

  logout() {
    this.setState({ loggedIn: false });
  }

  loggedIn() {
    return this.state.loggedIn;
  }

  renderComponent() {
    console.log("rendering component..");
    if (this.loggedIn()) {
      return (
        <View>
          <Header text="Cases"/>
          <Cases />
        </View>
      );
    }
    else {
      return (
        <View>
          <Header text="Login"/>
          <LoginForm loggedIn={this.loggedIn()} setLogin={this.login} setLogout={this.logout}/>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent()}
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
