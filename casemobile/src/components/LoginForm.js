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
   let userName = this.state.email,
   password = this.state.password;

    authenticate(userName, password)
    .then(()=>{
      Actions.tabs();
    })
    .catch(()=>{
      Alert.alert('Invalid Credentials', 'Either Email or Passowrd is incorrect',[      
        {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},      
      ]);
    })
   /*if(email == "admin" && password == "admin"){
    Actions.cases();
   } else if (email == "admin1" && password == "logrhythm!1"){
    Actions.cases();
   } else {
     //console.log("response onButton press false",loginResp);     
     Alert.alert('Invalid Credentials', 'Either Email or Passowrd is incorrect',[      
      {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},      
    ]);*/

   }
   
  //  authenticate(email,password).then((loginResp) => {
  //   console.log("Fair login respose ", loginResp);    
  //   if(Boolean(loginResp)){
  //     if(loginResp.token){
  //       console.log("response onButton press true",loginResp);          
  //       Actions.cases();
  //      } else {
  //        console.log("login Respose is available but no token")
  //      }
  //   } else {     
  //    console.log("response onButton press false",loginResp);     
  //    Alert.alert('Invalid Credentials', 'Either Email or Passowrd is incorrect',[      
  //     {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},      
  //   ]);
  //   }
  //  });
  
  render() {
    return (
     <Container>        
        <Content style={{padding:15}}>                  
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
          <Item style={{borderBottomWidth:0,marginTop: 25}}>            
          </Item>
          <Button block
              onPress={this.onButtonPress.bind(this)}
            >
            <Text>Log In </Text>
          </Button>
          {/* <Content >
          
          
          </Content>  */}
            
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