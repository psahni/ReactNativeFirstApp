import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Footer, FooterTab,  Left, Right, Body, Icon, Text, Form, Item, Input, Label,ListItem, Radio,Button } from 'native-base';
import RadioForm from 'react-native-radio-form';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { updateCaseStatus } from '../caseactions';

import {colors} from '../utils/colors';

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
    this.state = {    
      caseid : "",      
      completed:2
    }   
    console.log("Constructor " , this.props.selectedCase);   
  }

  componentWillMount() {    
    this.setState({ caseid: this.props.selectedCase.id});
  }
 
  _onSelect = ( item ) => {
      console.log(item);
   };

  updateStatus(id,status) {
      console.log("Status received in method " + status);
      updateCaseStatus(id,status).then((updatedResponse)=>{
        console.log("PUT Response ", updatedResponse );
        this.props.selectedCase.status.name = updatedResponse.status.name;
        console.log("Updated property : " , this.props.selectedCase.status.name );
      });

    // console.log('Pressed for status ' + status);
    // Alert.alert(
    //   'Inforamtion',
    //   'Implementation pending',
    //   [
    //     {text: 'OK', onPress: () => console.log('OK Pressed')}
    //   ]
    // )
  }


  render() {
    const formattedDueDate = (item) => {
      if (!item.dueDate) return;
      
      const  date = new Date(item.dueDate);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
    
    return(
      <Container>        
        <Content style={{padding:15}}>          
          
            <Item stackedLabel>
              <Label>Description</Label>
              <Input
                value = {this.props.selectedCase.name} 
                editable={false}
              />
            </Item>
            <View >
              <Item style={{borderBottomWidth:0,marginTop: 15}}>
                  <Label >Priority</Label>   
              </Item>
              {/* <Label>Priority</Label> */}
              <RadioForm
                style={{ width: 350 - 30 }}
                dataSource={mockData}
                itemShowKey="label"
                itemRealKey="value"
                circleSize={16}
                initial={parseInt(this.props.selectedCase.priority)-1} //temporary jugad
                formHorizontal={true}
                labelHorizontal={true}
                onPress={(item) => this._onSelect(item)}/>
            </View>
            <Item stackedLabel>
              <Label>Due Date</Label>
              <Input
                //value = {this.props.selectedCase.dueDate} 
                value = {formattedDueDate(this.props.selectedCase)}
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
            <Item style={{borderBottomWidth:0,marginTop: 25}}>            
            </Item>            
            <Button full 
            onPress={() => this.updateStatus(this.state.caseid,{statusNumber:this.state.completed})}
            >
              <Text>Complete</Text>
            </Button>           
            <Item style={{borderBottomWidth:0,marginTop: 25}}>            
            </Item>
            {/* <View style={{flexDirection:'row'}}>                          
                <View style={{paddingLeft:10}}>
                  <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Incident" color={colors.colorButton}/>
                </View>
                <View style={{paddingLeft:10}}>
                 <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Completed" color={colors.colorButton}/>
                </View>               
            </View> */}
          
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
