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

  state = { loggedIn: false, text: 'Login' };

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.getScreenText = this.getScreenText.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  login() {
    console.log("-> User is logging in");
    this.setState({ loggedIn: true, text: 'Cases' });
  }

  logout() {
    console.log("-> User is logging out");
    this.setState({ loggedIn: false, text: 'Login' });
  }

  userLoggedIn() {
    return !!this.state.loggedIn;
  }

  getScreenText() {
    return this.state.text;
  }

  renderComponent() {
    const components = [];
    console.log("rendering component..", this.state.text);
    components.push(
      <Header key= "header" getScreenText={this.getScreenText} userLoggedIn={this.userLoggedIn} setLogout={this.logout}/>
    )

    if (this.userLoggedIn()) {
      components.push(
        <Cases key= "cases" setLogout={this.logout}/>
      )
    } else {
      components.push(
        <LoginForm key= "LoginForm" userLoggedIn={this.userLoggedIn} setLogin={this.login}/>
      )
    }
    return components;
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
});

AppRegistry.registerComponent('caseApi', () => caseApi);
