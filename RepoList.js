import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NaviBar from 'react-native-pure-navigation-bar';
import { listRepos, selectCabinet } from './reducers/axiosReducer';
//console.log(listRepos.toString())

//NaviBar.default.props.style.navbarHeight = 30;


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
    //console.log('was selected' + this.props.selectedCabinet);
    return (
      
      <View style={{flex: 1}}>
        <NaviBar
          title='Кабинет'
          leftElement='Калькулятор'
          onLeft = {() =>this.props.navigation.navigate('Calc')}

        />
        <FlatList
          style={styles.container}
          data={repos}
          renderItem={this.renderItem}
        />
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignSelf: 'stretch',
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
    console.log(state.reducerA.repos[1])
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