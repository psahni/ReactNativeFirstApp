import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, CheckBox, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
import { getServerDetails, setServerDetails } from '../config';
import { Actions } from 'react-native-router-flux';


class Configure extends Component {
  
  constructor(props) {
    super(props);
    this.props = props;
    const serverDetails = getServerDetails();
    this.state = {
        protocol: serverDetails.protocol || 'http',
        server: serverDetails.server || 'localhost',
        port: serverDetails.port || '5555',
        error: ''
    }
  }

  onSaveConfiguration() {
   this.validConfiguration()
   .then(()=>{
       setServerDetails(this.state.protocol, this.state.server, this.state.port)
       Actions.home();
   })
   .catch((err)=>{
        this.setState({error: err});
   })
  }

  validConfiguration(){
      return new Promise((resolve, reject) => {
        if(!this.state.server) {
            return reject("Please fill server details")
        }
        if (!this.state.port){
            return reject("Please enter port")
        }
        resolve(true)
      });
  }

  setProtocol(protocol) {
      if(protocol == 'http'){
          return this.setState({protocol: this.state.protocol == protocol? 'https' : 'http'})
      }

      return this.setState({protocol: this.state.protocol == protocol? 'http' : 'https'})
  }
  
  render() {
    return (
     <Container>        
        <Content>
          <Form>
            <Item style={{borderBottomWidth:0}}>
                <Label>Protocol</Label>   
            </Item>
            <Item style={{marginTop: 15, paddingBottom: 15}}>
                <Item onPress= {() => this.setProtocol('http')} style={{ display: 'flex', flex: 1, borderBottomWidth:0 }}>
                    <CheckBox onPress= {() => this.setProtocol('http')} checked={this.state.protocol == 'http'} />
                    <Text style={{marginLeft:15}}>http</Text>
                </Item>
                <Item onPress= {() => this.setProtocol('https')} style={{ display: 'flex', flex: 1, borderBottomWidth:0 }}>    
                    <CheckBox onPress= {() => this.setProtocol('https')}  checked={this.state.protocol == 'https'} />
                    <Text style={{marginLeft:15}}>https</Text>
                </Item>
            </Item>
            <Item floatingLabel>
              <Label>Server</Label>
              <Input                 
                value={this.state.server}
                onChangeText={server => {return this.setState({ server });}}
              />
            </Item>
            <Item floatingLabel>
              <Label>Port</Label>
              <Input                                 
                value={this.state.port}
                onChangeText={port => {return this.setState({ port });}}
              />
            </Item>                       
          </Form>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          <Button full
            onPress={this.onSaveConfiguration.bind(this)}
          >
            <Text>Continue</Text>
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

export default Configure;