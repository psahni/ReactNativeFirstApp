import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { Actions } from 'react-native-router-flux';
import { getCases } from '../caseactions';

import { Text, View, StyleSheet } from 'react-native';

// Make a component

class CaseList extends Component {
   componentWillMount() {
    console.log('2. componentWillMount in Case List', this.state.cases);
    getCases().then((allcases) =>{
      console.log("All cases are : ", allcases );
      this.setState({cases:allcases.reverse()});
    });
  }

  constructor(props) {
    super(props);
    const { setLogout } = props;
    this.state = {
      cases: [
        { id: 1, name: 'Case 1', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 2, name: 'Case 2', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        { id: 3, name: 'Case 3', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 4, name: 'Case 4', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 5, name: 'Case 5', summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
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
        <Text>{_case.summary}</Text>
        <Text style={styles.caseLinkStyle} onPress={()=>Actions.caseDetail({id: _case.id, selectedCase :_case})}>More..</Text>
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

  },
  caseLinkStyle: {
    color: 'blue',
    fontWeight: "600"
  }
});

export default CaseList;
