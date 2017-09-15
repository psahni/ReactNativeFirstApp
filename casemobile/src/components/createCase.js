import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab,  Left, Right, Body, Icon, Text, Form, Item, Input, Label,ListItem, Radio, Button } from 'native-base';
import RadioForm from 'react-native-radio-form';

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
    this.state = {
      desc : "",
      dueDate : "",
      age : "",
      summary : "",
      collaborator:"",
      tag :"",
      dummy :"",
      output:[],
      headingtext:"Priority"
	    }
	}	

	_handlePress() {
		console.log('Pressed!');
	}

	_createCase() {		
        fetch('https://requestb.in/1g4ltza1', {
          method: 'POST',              
          body: JSON.stringify({
                name: this.state.desc,
                priority: 5,
                externalId: "CaseSummary",
                summary: this.state.summary,
                tag : this.state.tag,
                collaborator : this.state.collaborator
              })
        }).then((response) => {
         console.log("response : " + response);
          
        });          
	}

	_onSelect = ( item ) => {
      console.log(item);
    };

    renderButton() {
	    if (this.state.loading) {
	      return <Spinner size="small" />;
	    }

	    return (
	      <Button onPress={this._createCase.bind(this)}>
	        Create Case
	      </Button>
	    );
    }

  render () {
  	return (
  		<Container>        
        <Content>
          <Form>
            <Item floatingLabel style={{"flex": 1,"marginTop": 70}}>
              <Label>Description</Label>
              <Input 
              	value = {this.state.desc}
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
                onPress={(item) => this._onSelect(item)}/>
            </View>
            <Item floatingLabel>
              <Label>Due Date</Label>
              <Input 
              	value = {this.state.dueDate}
              />
            </Item>
            <Item floatingLabel>
              <Label>Summary</Label>
              <Input 
              	value = {this.state.summary}
              />
            </Item>
            <Item floatingLabel>
              <Label>Add Collaborator</Label>
              <Input 
              	value = {this.state.collaborator}
              />
            </Item>
            <Item floatingLabel>
              <Label>Tag</Label>
              <Input 
              	value = {this.state.tag}
              />
            </Item>            
          </Form>
          <Button full>
	          <Text>Create Case</Text>
	        </Button>
        </Content>
      </Container>
  	)
  }

}

// const styles = StyleSheet.create({
//   "container": {
//   	"flex" : 1,    
//     "backgroundColor": "#3498db",
//     "padding": 10
//   },
//   "continpbox":{
//     "flex" : 7
//   },
//   "contbtn":{
//     "flex" : 1    
//   },
//   "textInputWrapper": {
//     "flex": 1    
//   },  
//   "textTopMargin": {
//     "flex": 1,"marginTop": 70
//   },
//   "inputbox": {
//     "backgroundColor": "rgba(255,255,255,0.2)",
//     "color": "black",
//     "paddingHorizontal": 10
//   },
//   "rowrflex": {
//     "flex": 1,
//     "flexDirection": "row",
//   },  
//   viewStyle: {
//     paddingTop: 50,
//     paddingBottom: 50,
//   },
// });

export default CreateCase;