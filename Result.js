import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';


class Result extends Component {

  

  render() {
    return (
      <Text style = {styles.result}>
        {this.props.cabinet ? 
          `Модель - ${this.props.cabinet.model}
          Ширина - ${this.props.cabinet.width * this.props.width} мм
          Высота - ${this.props.cabinet.height * this.props.height} мм
          `  
        :'No cabinet selected'}
      </Text>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  result: {
    padding: 14,
    borderBottomWidth: 1,
    //borderBottomColor: '#ddd'
  },
  
});

const mapStateToProps = state => {
    let cabinet = state.reducerA.repos.filter(repo => repo.id == state.reducerA.selectedCabinet)[0];
    return {
      cabinet,
      width: state.reducerA.width,
      height: state.reducerA.height,
    }
};


export default connect(mapStateToProps, null)(Result);