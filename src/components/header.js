import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

// Make a component

const Header = ({ text }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  }
});

export default Header;
