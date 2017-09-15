import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Button } from './common'

export default class Dashboard extends Component {

  render() {    
    return (
      <View style={styles.viewStyle}>
        <Text >
          this is dashboard
        </Text>
      </View>
    )
  }
}
