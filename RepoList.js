import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

import { listRepos, selectCabinet } from './reducers/axiosReducer';
//console.log(listRepos.toString())


class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('alexeyom');
  }
  renderItem = ({ item }) => (
    <View

      style = {item.id === this.props.selectedCabinet ? styles.selectedItem : styles.item }  
      
    >
      <Text
        onPress={() => {
          this.props.selectCabinet(item.id)
        }}
      >         
        {item.model}
      </Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    console.log('was selected' + this.props.selectedCabinet);
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  selectedItem: {
    padding: 14,
    backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa'
  }
});

const mapStateToProps = state => {

    let storedRepositories = state.reducerA.repos.map(repo => ({ key: repo.id.toString(), ...repo }));
    return {
      repos: storedRepositories,
      selectedCabinet: state.reducerA.selectedCabinet,
    }
};

const mapDispatchToProps = {
  listRepos,
  selectCabinet,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);


/*
      {repos && 
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />}
*/