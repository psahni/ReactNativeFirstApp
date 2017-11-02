import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right,View,Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Actions } from 'react-native-router-flux';
import { getCases } from '../caseactions';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet } from 'react-native';

// Make a component

class CaseList extends Component {
   componentWillMount() {
    console.log('2. componentWillMount in Case List', this.state.cases);
    getCases().then((allcases) =>{
      console.log("All cases are : ", allcases);
      
      this.setState({cases:allcases});
      
    });
  }

  constructor(props) {
    super(props);
    const { setLogout } = props;
    this.state = {
      cases: [],
      active: 'true'
    };
  }

 

  

render() {
  
    let items = this.state.cases;

    if(items.length) {
      return (
        <Container>
          {this.renderCaseList(items)}
          {this.renderAddButton()}
        </Container>
      )
    }

    return (
      <Container>
        <View style={{ flex: 1 }}>
          <Text>No Cases created yet</Text>
        </View>
        {this.renderAddButton()}
      </Container>
    )
  }

  renderCaseList(items){
    const getCardStyle = (item) => {
      const statusColors = {
        1: '#09f',
        2:'#666',
        3:'#c00',
        4:'#dd6b0f',
        5:'#164664',
      }
      console.log(statusColors[item.status.number]);
      return {borderLeftWidth:4, borderLeftColor:`${statusColors[item.status.number]}`};
    }

    const formattedDueDate = (item) => {
      if (!item.dueDate) return;
      
      const  date = new Date(item.dueDate);
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    return (
          <List dataArray = {items} 
            renderRow={(item) => 
            <ListItem style={{borderBottomWidth:0, paddingVertical:0}}>
              <Content>
                <Card style={getCardStyle(item)}>
                  <CardItem>                    
                    <Grid>
                      <Row>
                        <Col size={2}>                          
                        <Row style={{justifyContent: 'center',alignItems: 'center'}}>                          
                            <Content>
                              <Left>
                                <Text style={{fontSize:30}}>P : {item.priority}</Text>  
                              </Left> 
                            </Content>  
                          </Row>                        
                        </Col>
                        <Col size={1}>                                              
                        </Col>
                        <Col size={4}>                          
                          <Row>                          
                            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                          </Row> 
                          <Row>                          
                          <Text style={{fontSize:12}}>Status : {`${item.status.name}`}</Text>
                          </Row> 
                          <Row>                          
                            <Text style={{fontSize:12}}>Due On : {formattedDueDate(item)}</Text>
                          </Row>                                            
                        </Col>
                        <Col size={1}>
                          <Row size={90}>                          
                              
                          </Row>                            
                          <Row size={10}>
                            <Content>
                              <Right>
                                <Icon name='expand-more' style={{fontSize: 20, color: 'black'}} onPress={()=>{console.log("Pressed");Actions.caseDetail({selectedCase:item})}}/>                          
                              </Right>
                            </Content>                          
                          
                          </Row> 
                        </Col>
                      </Row>
                    </Grid>
                  </CardItem>                      
                </Card>
              </Content>
            </ListItem>
            }
          >
          </List>
    )
  }

  renderAddButton() {
    return (
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
    )
  }
}


const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: "600",
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'

  },
  caseLinkStyle: {
    color: 'blue',
    fontWeight: "600"
  }
});

export default CaseList;

