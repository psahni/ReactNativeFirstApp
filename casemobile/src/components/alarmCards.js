import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View,Fab } from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

class AlarmCards extends Component {
   componentWillMount() {
    //console.log('2. componentWillMount in Case List', this.state.cases);
    //getCases().then((allcases) =>{
     // console.log("All alarms are : ", allcases);
      //console.log("All cases length : ", allcases.length);
      // let reversedArr =[];
      // for(let arrLength = allcases.length; arrLength > 0; arrLength--){        
      //   reversedArr.push(allcases[arrLength]);
      //   console.log("Reversed Arry : ", reversedArr.length);
      // }
      // console.log("reversedArr ",reversedArr);
      // let spliced = reversedArr.slice(0,5);            
      // console.log("spliced ", spliced);
      //this.setState({cases:allcases});
      //this.setState({cases:allcases.reverse()});
    //});
  }

  constructor(props) {
    super(props);
    const { setLogout } = props;
    this.state = {
      alarms: [
        { id: 1, name: 'Alarm 1', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 2, name: 'Alarm 2', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
         { id: 3, name: 'Alarm 3', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         { id: 4, name: 'Alarm 4', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 5, name: 'Alarm 5', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      ],
      active: 'true'
    };
  }

  render() {
  //var items = [{name:'Simon Mignolet',prio:1},{name:'Nathaniel Clyne',prio:2},{name:'Dejan Lovren',prio:3},{name:'Mama Sakho',prio:2},{name:'Emre Can',prio:1}];
  let items = this.state.alarms;
  
  const getCardStyle = (item) => {
    const statusColors = {
      1: '#09f',
      2:'#666',
      3:'#c00',
      4:'#dd6b0f',
      5:'#164664',
    }
    //console.log(statusColors[item.status.number]);
    //return {borderLeftWidth:2, borderLeftColor:`${statusColors[item.status.number]}`};
  }

  

  return (
      <Container>
        
          <List dataArray = {items} 
            renderRow={(item) => 
            <ListItem>
              <Content>
                <Card style={getCardStyle(item)} onTouchStart={()=>{console.log("On Press");Actions.caseDetail({selectedCase:item})}}>
                  <CardItem>
                    <Left>              
                      <Body>
                        <Text>{item.name}</Text>
                        <Text note>{`${item.name}`}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <Content>
                        <Button large transparent>
                          <Text>P : {item.priority}</Text>
                        </Button>                          
                        </Content>                        
                      </Body>
                    </Left>
                  </CardItem>           
                  <CardItem>
                    <Left>
                      <Body>                      
                        <Text>Due On :</Text>                      
                      </Body>
                    </Left>                                                            
                  </CardItem>
                </Card>
              </Content>
            </ListItem>
            }
          >
          </List>
          <View style={{ flex: 1 }}>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={()=>Actions.createCase()}>
              <Icon name="add" />
            </Fab>
          </View>
      </Container>
  )}
}

export default AlarmCards;