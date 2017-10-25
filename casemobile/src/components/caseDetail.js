import React, { Component } from 'react';
import { View, Button,Alert } from 'react-native';
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
    Alert.alert(
      'Inforamtion',
      'Implementation pending',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ]
    )
  }

 

  render() {
    const formattedDueDate = (item) => {
      if (!item.dueDate) return;
      
      const  date = new Date(item.dueDate);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
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
            <View style={{flexDirection:'row'}}>                          
                <View style={{paddingLeft:10}}>
                  <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Incident" color="#303f9f"/>
                </View>
                <View style={{paddingLeft:10}}>
                 <Button style={{paddingLeft:80}} onPress={() => this._handlePress()}  title="Completed" color="#303f9f"/>
                </View>
                {/* <View style={{paddingLeft:10}}>
                 <Button style={{paddingLeft:80}} onPress={()=>Actions.createCase()}  title="New" color="#303f9f"/>
                </View>              */}
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
