import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './home';
import LoginForm from './LoginForm';
import CaseDetail from './caseDetail';
import CreateCase from './createCase';
import CaseList from './cases';
import { View, Button } from 'react-native';

const RouterComponent = () => (
  <Router>    
     <Scene key="root">     
      <Scene key="home" component={Home}   title="" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}} />
      <Scene key='cases' component={CaseList} title="Case List" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}} onRight={() => Actions.home()} rightTitle = "LogOut" rightButtonTextStyle={{color: 'white'}}/>
      <Scene key='caseDetail' component={CaseDetail} title="Case Properties" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}} onRight={() => Actions.home() } rightTitle = "LogOut" rightButtonTextStyle={{color: 'white'}}/>
      <Scene key='createCase' component={CreateCase} title="Create Case" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: '#303f9f'}} onRight={() => Actions.home()} rightTitle = "LogOut" rightButtonTextStyle={{color: 'white'}}/>
     </Scene>        
  </Router>
);
export default RouterComponent;

//onRight={() => Actions.home()} rightButtonImage={require('./menu-alt-512.png')}

//from cases ---- rightButtonImage={require('./menu-alt-512.png')}
//from caseDetail ---- leftButtonImage={require('./menu-alt-512.png')}
