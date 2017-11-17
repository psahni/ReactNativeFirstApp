import React, { Component } from 'react';
import { Image } from 'react-native';
import RadioForm from 'react-native-radio-form';
import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View,Fab, Radio,Item,Label,Footer,FooterTab} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';

const mockData = [
  {
      label: 'New',
      value: 'New'
  },
  {
      label: 'Open',
      value: 'Open'
  },
  {
      label: 'Closed',
      value: 'Closed'
  }
];

class AlarmCards extends Component {
   componentWillMount() {
  }

  constructor(props) {
    super(props);
    const { setLogout } = props;
    this.state = {
      alarms: [
        { AlarmId: 100, AlarmName: 'Private Alarm 1', AlarmRisk: 35, AlarmEntity: 'Primary Site', AlarmStatus: 'Open', TrigerredDate: '11/14/2017', TrigerredTime: '5:34:47 am'},
        { AlarmId: 110, AlarmName: 'Private Alarm 2', AlarmRisk: 50, AlarmEntity: 'Primary Site', AlarmStatus: 'New', TrigerredDate: '11/14/2017', TrigerredTime: '5:45:47 am'},
        { AlarmId: 120, AlarmName: 'Private Alarm 3', AlarmRisk: 29, AlarmEntity: 'Primary Site', AlarmStatus: 'Closed', TrigerredDate: '11/14/2017', TrigerredTime: '5:15:47 am'},
        { AlarmId: 130, AlarmName: 'Private Alarm 4', AlarmRisk: 67, AlarmEntity: 'Primary Site', AlarmStatus: 'New', TrigerredDate: '11/14/2017', TrigerredTime: '5:10:47 am'},
        { AlarmId: 140, AlarmName: 'Private Alarm 5', AlarmRisk: 79, AlarmEntity: 'Primary Site', AlarmStatus: 'New' , TrigerredDate: '11/14/2017', TrigerredTime: '5:05:47 am'},
      ],
      active: 'true'
    };
  }

  _onSelect = ( item ) => {
    console.log(item);      
    this.setState({AlarmStatus:item});
  };  

  render() {
  let items = this.state.alarms;
  
  const getCardStyle = (item) => {
    const statusColors = {
      1: '#09f',
      2:'#666',
      3:'#c00',
      4:'#dd6b0f',
      5:'#164664',
    }
  }

  

  return (
      <Container>
        
          <List dataArray = {items} 
            renderRow={(item) => 
            <ListItem>
              <Content>
                <Card style={getCardStyle(item)}>
                <CardItem header>
                <Row style={{justifyContent: 'center',alignItems: 'center'}}>   
                <Text style={{fontWeight:'bold'}}>{item.AlarmName}</Text>
                </Row>
            </CardItem>
         
                  <CardItem>
                    <Left>  
                    <Col size={2}>                      
                      <Row size={3}>                      
                          <Text style={{fontWeight:'bold',fontSize:40}}>{item.AlarmRisk}</Text>                      
                      </Row>
                      <Row size={1}>
                        <Label style={{fontWeight:'bold',left:16}}>Risk</Label>
                      </Row>
                    </Col>
                    </Left>
                    <Col size = {1}/>
                    <Col size={4}>                                                    
                          <Row>
                          <Text>ID : {item.AlarmId}</Text>
                            </Row>
                            <Row>                          
                            <Text >Status : {item.AlarmStatus}</Text>
                          </Row>
                            <Row>
                          <Text>Entity : {item.AlarmEntity}</Text>
                            </Row>
                            <Row>
                          <Text>Trigerred Date : {item.TrigerredDate}</Text>
                            </Row>
                            <Row>
                          <Text>Trigerred Time : {item.TrigerredTime}</Text>
                            </Row>
                        </Col>
                  </CardItem>
                  <CardItem footer>
                  <Button transparent style={{justifyContent: 'center',alignItems: 'center'}}>
                 
                  <Text>SmartResponse Not Set</Text>
                
                </Button>
                </CardItem>
                </Card>
              </Content>
            </ListItem>
            }
          >
          </List>
         
      </Container>
  )}
}

export default AlarmCards;