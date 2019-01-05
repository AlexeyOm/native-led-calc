import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NaviBar from 'react-native-pure-navigation-bar';
import { changeWidth, changeHeight } from './reducers/axiosReducer';
//console.log(listRepos.toString())


class SizeSelector extends Component {
  
  render() {
    
     return (
        <View style={{flex:1, justifyContent: 'flex-start'}}>
            <NaviBar
                title='CustomTitle'
            />

            <View style={styles.container}>
                <TouchableOpacity onPress = {() => {this.props.changeWidth(-1)}}>
                    <Text style = {styles.button}> - </Text>
                </TouchableOpacity>
                <Text style={styles.number}>{this.props.width}</Text>
                <TouchableOpacity onPress = {() => {this.props.changeWidth(1)}}>
                    <Text style = {styles.button}> + </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress = {() => {this.props.changeHeight(-1)}}>
                    <Text style = {styles.button}> - </Text>
                </TouchableOpacity>
                <Text style={styles.number}>{this.props.height}</Text>
                <TouchableOpacity onPress = {() => {this.props.changeHeight(1)}}>
                    <Text style = {styles.button}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'row',
    borderStyle: 'solid',
    borderTopColor: 'red',
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  button: {
    
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    paddingRight: 18,
    paddingLeft: 18,
    textAlign:'center',
  },
  number: {
    //padding: 18,
    paddingRight: 18,
    paddingLeft: 18,
    fontSize: 32,
    fontWeight: 'bold',
    
  }
});

const mapStateToProps = state => {
    return {
      width: state.reducerA.width,
      height: state.reducerA.height,
    }
};


const mapDispatchToProps = {
  changeHeight,
  changeWidth,
};

export default connect(mapStateToProps, mapDispatchToProps)(SizeSelector);