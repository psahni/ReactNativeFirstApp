import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab,  Left, Right, Body, Icon, Text, Form, Item, Input, Label,ListItem, Radio } from 'native-base';
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


class CaseDetail extends Component {

  constructor(props) {    
    super(props);
    this.props = props;
        // this.state = {
    //   caseDetails: [],
    //   caseSummary :'hello',
    //   priority:'2',
    //   status:'NA',
    //   desc:"",
    //   dueDate:"",
    //   age:"",
    //   summary:"",
    //   collaborators:"",
    //   tag:"",
    //   resol:""

    // }
   
    console.log("Constructor " , this.props.selectedCase);   

  }

 
 
  _onSelect = ( item ) => {
      console.log(item);
   };

   _handlePress() {
    console.log('Pressed!');
  }

 

  render() {
    return(
      <Container>
        <Header />
        <Content>          
          <Form>
            <Item stackedLabel>
              <Label>Description</Label>
              <Input
                value = {this.props.selectedCase.name} 
                editable={false}
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
                initial={this.props.selectedCase.priority}
                formHorizontal={true}
                labelHorizontal={true}
                onPress={(item) => this._onSelect(item)}/>
            </View>
            <Item stackedLabel>
              <Label>Due Date</Label>
              <Input
                value = {this.props.selectedCase.dueDate} 
                editable={false}
              />
            </Item>            
            <Item stackedLabel>
              <Label>Summary</Label>
              <Input
                value = {this.props.selectedCase.summary} 
                editable={false}
              />
            </Item>
            <Item stackedLabel>
              <Label>Collaborators</Label>
              <Input
                value = {this.props.selectedCase.collaborators[0].name} 
                editable={false}
              />
            </Item>
            <Item stackedLabel>
              <Label>Tags</Label>
              <Input
                value = {this.props.selectedCase.tags.join(' ')} 
                editable={false}
              />
            </Item>
            <Item stackedLabel>
              <Label>Resolution</Label>
              <Input
                value = {this.props.selectedCase.status.name} 
                editable={false}
              />
            </Item>
            <View style={{flexDirection:'row'}}>            
              <Button onPress={() => this._handlePress()}  title="Created" color="#303f9f"/>
                <View style={{paddingLeft:10}}>
                  <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Incident" color="#303f9f"/>
                </View>
                <View style={{paddingLeft:10}}>
                 <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Completed" color="#303f9f"/>
                </View>
                <View style={{paddingLeft:10}}>
                 <Button style={{paddingLeft:80}} onPress={()=>Actions.createCase()}  title="New" color="#303f9f"/>
                </View>             
            </View>
          </Form>
        </Content>
      </Container>
    )
  }
};

// const styles = StyleSheet.create({
//   viewStyle: {
//     paddingTop: 15,
//     paddingBottom: 15,
//   },
//   textStyle: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: "600",
//     textAlign: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: 'grey'

//   },
//   headers: {fontSize:13, fontWeight:'bold'},
//   container: {
//       flexDirection:'row',
//         }
// });

export default CaseDetail;
