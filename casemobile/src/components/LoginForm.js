import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import { authenticate, getToken } from '../authentication';
import { Actions } from 'react-native-router-flux';

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
   
   authenticate(email,password).then((loginResp) => {
    console.log("Fair login respose ", loginResp);    
    if(Boolean(loginResp)){
      if(loginResp.token){
        console.log("response onButton press true",loginResp);          
        Actions.cases();
       } else {
         console.log("login Respose is available but no token")
       }
    } else {     
     console.log("response onButton press false",loginResp);     
     Alert.alert('Invalid Credentials', 'Either Email or Passowrd is incorrect',[      
      {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},      
    ]);
    }
   });   
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