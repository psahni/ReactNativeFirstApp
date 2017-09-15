import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';

const EMAIL = "admin";
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
     <Container>        
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input                 
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
               />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
                secureTextEntry                
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>            
          </Form>
          <Button full
            onPress={this.onButtonPress.bind(this)}
          >
            <Text>Log In </Text>
          </Button>
        </Content>
      </Container>
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
