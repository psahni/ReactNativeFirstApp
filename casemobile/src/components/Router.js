import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './home';
import LoginForm from './LoginForm';
import CaseDetail from './caseDetail';
import CreateCase from './createCase';
import CaseList from './cases';
import { View, Button } from 'react-native';
import { getBaseURL } from '../config.js';
import {colors} from '../utils/colors';
import Dashboard from './dashboard';

const RouterComponent = () => (
  <Router>    
     <Scene key="root">     
      <Scene key="home" component={Home}   title={getBaseURL()? "Login":"Configure"} titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: colors.bgHeader}} />
      <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
      <Scene key='cases' component={CaseList} title="Case List" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: colors.bgHeader}} onRight={() => {console.log(" TExt")}} rightButtonImage={require('./menu-alt-512.png')} rightButtonIconStyle={{width: 30, height: 30}}/>
      <Scene key='caseDetail' component={CaseDetail} title="Case Properties" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: colors.bgHeader}} onRight={() => {console.log(" TExt")}} rightButtonImage={require('./menu-alt-512.png')} rightButtonIconStyle={{width: 30, height: 30}}/>
      <Scene key='createCase' component={CreateCase} title="Create Case" titleStyle={{color: 'white'}} navigationBarStyle={{ backgroundColor: colors.bgHeader}} onRight={() => {console.log(" TExt")}} rightButtonImage={require('./menu-alt-512.png')} rightButtonIconStyle={{width: 30, height: 30}}/>
     </Scene>        
  </Router>
);
export default RouterComponent;

//onRight={() => Actions.home()} rightButtonImage={require('./menu-alt-512.png')}

//from cases ---- rightButtonImage={require('./menu-alt-512.png')}
//from caseDetail ---- leftButtonImage={require('./menu-alt-512.png')}
