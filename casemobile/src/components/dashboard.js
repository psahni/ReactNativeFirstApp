import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  View,
  Fab
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row size={50}>
              <Card>
                <CardItem header>
                  <Text>
                    Alarms
                  </Text>
                </CardItem>
                <CardItem cardBody>
                  <Text>Placeholder for Content</Text>
                </CardItem>
              </Card>
            </Row>
            <Row size={50}>
              <Card>
                <CardItem header>
                  <Text>
                    Cases
                  </Text>
                </CardItem>
                <CardItem cardBody>
                  <Text>Placeholder for Content</Text>
                </CardItem>
                <CardItem>
                <Button onPress={() => Actions.cases()}><Text>More</Text></Button>
                </CardItem>
              </Card>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}
