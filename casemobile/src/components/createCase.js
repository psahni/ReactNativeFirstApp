import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab,  Left, Right, Body, Icon, Text, Form, Item, Input, Label,ListItem, Radio, Button } from 'native-base';
import RadioForm from 'react-native-radio-form';
import { authenticate, getToken,isAuthenticated } from '../authentication';
import { createCaseReq } from '../caseactions';

const mockData = [
    {
        label: '1',
        value: '1'
    },
    {
        label: '2',
        value: '2'
    },
    {
        label: '3',
        value: '3'
    },
    {
        label: '4',
        value: '4'
    },
    {
        label: '5',
        value: '5'
    }
];

class CreateCase extends Component {

	constructor(props) {
    super(props);
    this.props = props;
    // this.state = {
    //   name : "",
    //   dueDate : "",
    //   age : "",
    //   summary : "",
    //   collaborator:"",
    //   tag :"",                  
    //   priority:""
    //   }
    this.state = {
        name : "",
        summary : "",
        priority:""
	    }
	}	

	_onSelect = ( item ) => {
      console.log(item);      
      this.setState({priority:item});
    };    

    onPressCreateCase(){
      console.log("current stage of state", this.state);
      createCaseReq(this.state).then((createCaseResp) => {
        console.log("Case Response",createCaseResp);
        if(createCaseResp.status.name == "Created"){
          this.setState({name : "",
          summary : "",
          priority:""});
          Actions.cases();
        } else {
          Alert.alert('Error Occured', 'Error occured while saving case',[      
            {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},      
          ]);
        }
      });
    }



  render () {
  	return (
  		<Container>        
        <Content>
          <Form>
            <Item floatingLabel style={{"flex": 1,"marginTop": 70}}>
              <Label>Name</Label>
              <Input 
              	value = {this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
            <View style={{ marginHorizontal: 20 }}>
              <Label>Priority</Label>
              <RadioForm
                style={{ width: 350 - 30 }}
                dataSource={mockData}
                itemShowKey="label"
                itemRealKey="value"
                circleSize={16}
                initial={this.state.priority}
                formHorizontal={true}
                labelHorizontal={true}
                onPress={(item) => this._onSelect(parseInt(item.value))}/>
            </View>
            {/* <Item floatingLabel>
              <Label>Due Date</Label>
              <Input 
              	value = {this.state.dueDate}
                onChangeText={dueDate => this.setState({ dueDate })}
              />
            </Item> */}
            <Item floatingLabel>
              <Label>Summary</Label>
              <Input 
              	value = {this.state.summary}
                onChangeText={summary => this.setState({ summary })}
              />
            </Item>
            {/* <Item floatingLabel>
              <Label>Add Collaborator</Label>
              <Input 
              	value = {this.state.collaborator}
                onChangeText={collaborator => this.setState({ collaborator })}
              />
            </Item> */}
            {/* <Item floatingLabel>
              <Label>Tag</Label>
              <Input 
              	value = {this.state.tag}
                onChangeText={tag => this.setState({ tag })}
              />
            </Item>             */}
          </Form>
          <Button full 
          onPress={this.onPressCreateCase.bind(this)}
          >
	          <Text>Create Case</Text>
	        </Button>
        </Content>
      </Container>
  	)
  }
}

export default CreateCase;