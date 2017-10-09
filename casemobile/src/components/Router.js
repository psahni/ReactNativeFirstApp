import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './home';
import LoginForm from './LoginForm';
import CaseDetail from './caseDetail';
import CreateCase from './createCase';
import CaseList from './cases';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="LR Case Tracker" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}}/>
      <Scene key='cases' component={CaseList} title="Case List" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}}/>
      <Scene key='caseDetail' component={CaseDetail} title="Case Properties" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}}/>
      <Scene key='createCase' component={CreateCase} title="Create Case" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}}/>
    </Scene>
  </Router>
);
export default RouterComponent;
