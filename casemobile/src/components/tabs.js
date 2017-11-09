import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import CaseList from './cases';
import AlarmCards from './alarmCards';

class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Case List</Text></TabHeading>}>
            <CaseList />
          </Tab>
          <Tab heading={ <TabHeading><Text>Alarm List</Text></TabHeading>}>
          <AlarmCards />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default TabsAdvancedExample;