import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

const EMAIL = "admin@logrhythm.com";
const PASSWORD = 'pass123'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  constructor({ setLogin, setLogout, userLoggedIn }) {
    super();
    this.setLogin = setLogin;
  }

  onButtonPress() {
    const { email, password } = this.state;

    if ( email == EMAIL && password == PASSWORD ) {
      this.setState({ error: '', loading: true });
      this.onLoginSuccess();
    }
    else {
      this.onLoginFail();
    }
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    console.log("login is successful..");
    this.setLogin();
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
