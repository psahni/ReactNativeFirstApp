import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import { Text, View, StyleSheet } from 'react-native';

// Make a component

class CaseList extends Component {
   componentWillMount() {
    console.log('2. componentWillMount in Case List', this.state.cases);
  }

  constructor(props) {
    super(props);
    console.log("1. inside contructor..");
    this.state = {
      cases: [
        { name: 'Case 1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { name: 'Case 2', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        { name: 'Case 3', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { name: 'Case 4', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { name: 'Case 5', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      ]
    };
  }

  _renderHeader(_case) {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{_case.name}</Text>
      </View>
    );
  }

  _renderContent(_case) {
    return (
      <View>
        <Text>{_case.description}</Text>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        sections={this.state.cases}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        underlayColor="white"
    />
  )}
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

  }
});

export default CaseList;
