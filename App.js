import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStackNavigator } from 'react-navigation';


import {reducer} from './reducers/axiosReducer';
import RepoList from './RepoList';
import Result from './Result';
import SizeSelector from './SizeSelector';

//console.log(reducer.toString());

const client = axios.create({
  baseURL: 'http://192.168.1.107:8000/editor',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const AppNavigator = createStackNavigator(
  {
    Calc: {screen: SizeSelector },
    Selection: {screen: RepoList },
  },
  {
    initialRouteName: 'Selection'
  }
  );


console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: -25,
    backgroundColor: '#fff',
  },
});


/*
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Result />
          <RepoList />
          <SizeSelector />
        </View>
      </Provider>
    );
  }
}*/