import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import { authenticate, getToken } from '../authentication';

const EMAIL = "admin";
const PASSWORD = 'pass123'

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.props = props; 
    this.state = {
      email : '',
      password : '',
      token :''
    }   
  } 

//onPress={this.onButtonPress.bind(this)}

  onButtonPress() {
   let email = this.state.email,
   password = this.state.password;
   const loginResp = authenticate(email,password);
   if(loginResp.token){
    alert('token available');
   } else {
    alert('token un-available ' + JSON.stringify(loginResp));
   }
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
                onChangeText={password => {console.log(arguments);return this.setState({ password });}}
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
