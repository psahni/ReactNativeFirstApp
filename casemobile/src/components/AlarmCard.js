import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View,Fab, Radio,Item,Label,Footer,FooterTab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';


const ALARM_STATUSES = {
   0: 'New',
   1: 'Open',
   2: 'Working',
   3: 'Escalated',
   4: 'Closed',
   5: 'ClosedFalseAlarm',
   6: 'ClosedResolved',
   7: 'ClosedUnresolved',
   8: 'ClosedReported',
   9: 'ClosedMonitor'
}

class AlarmCard extends Component {

  constructor(props) {
    super(props);
  }

//#----------------------------------------------------------------------------------

  getCardStyle(item) {
    const statusColors = {
      1: '#09f',
      2:'#666',
      3:'#c00',
      4:'#dd6b0f',
      5:'#164664',
    }
  }

//#----------------------------------------------------------------------------------

  getAlarmDate(timestamp) {
    const date = new Date(timestamp);
    const locale = "en-us";
    
    return date.getFullYear() + " " + date.toLocaleString(locale, { month: "short" }) + " " + date.getDay();
  }

//#----------------------------------------------------------------------------------

  getAlarmTime(timestamp) {
    const date = new Date(timestamp);
    
    return date.toLocaleTimeString();  
  }

//#----------------------------------------------------------------------------------
  
  render() {  
    return (
      <ListItem>
      <Content>
        <Card style={this.getCardStyle(this.props.alarm)}>
          <CardItem header>
            <Row style={{justifyContent: 'center',alignItems: 'center'}}>   
              <Text style={{fontWeight:'bold'}}>{this.props.alarm.alarmRuleName}</Text>
            </Row>
          </CardItem>      
          <CardItem>
            <Left>  
              <Col size={2}>                      
                <Row size={3}>                      
                  <Text style={{fontWeight:'bold',fontSize:40}}>{this.props.alarm.riskBasedPriorityMax}</Text>                      
                </Row>
                <Row size={1}>
                  <Label style={{fontWeight:'bold',left:16}}>Risk</Label>
                </Row>
              </Col>
            </Left>
            <Col size = {1}/>
            <Col size={4}>                                                    
              <Row>
                <Text>ID : {this.props.alarm.alarmId}</Text>
              </Row>
              <Row>                          
                <Text >Status : {ALARM_STATUSES[this.props.alarm.alarmStatus]}</Text>
              </Row>
              <Row>
                <Text>Entity : {this.props.alarm.entityName}</Text>
              </Row>
              <Row>
                <Text>Trigerred Date : {this.getAlarmDate(this.props.alarm.alarmDate)}</Text>
              </Row>
              <Row>
                <Text>Trigerred Time : {this.getAlarmTime(this.props.alarm.alarmDate)}</Text>
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
  )}
}

export default AlarmCard;

//#------------------------------------END OF FILE ----------------------------------------------