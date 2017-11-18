import React, { Component } from 'react';
import { Image } from 'react-native';
import RadioForm from 'react-native-radio-form';
import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View,Fab, Radio,Item,Label,Footer,FooterTab} from 'native-base';
import Accordion from 'react-native-collapsible/Accordion';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';
import { DATA as AlarmData } from '../../alarmsData.js'
import { getAlarms } from '../alarmactions';
import  AlarmCard  from './AlarmCard.js';

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
    console.log("* component will mount");
    
    getAlarms().then((data) => {
      //console.log("data = ", data);
      console.log(AlarmData.items);
      
      this.setState({alarms: AlarmData.items});
    }).catch((error) => {
      console.log("ERROR:- ", error)
    });
  }

  constructor(props) {
    console.log("* constructor");
    super(props);
    const { setLogout } = props;
    this.state = {
      alarms: []
    }
  }

  _onSelect = ( item ) => {     
    this.setState({AlarmStatus:item});
  };  

  renderAlarms() {
    if (this.state.alarms.length) {
      return (       
        <List 
          dataArray={this.state.alarms} 
          renderRow={(alarm) => <AlarmCard alarm={alarm}/>}
        >
        </List>
      )
    } else {
      return <Text>"Loading Alarms.."</Text>;
    }
  }

  render() { 
    return (
      <Container>
        {this.renderAlarms()}
      </Container>
    )
  }
}

export default AlarmCards;