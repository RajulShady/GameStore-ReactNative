import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';


export default class Trending extends Component {
  render() {
    return (
    <View style={{width: 80, height: 100, margin: 8, marginBottom:5}}>
    <Image
      style={{width: 80, height: 70, flex: 1, borderRadius: 10, resizeMode:'stretch'}}
      source={this.props.imageUri}
    />
    <View style={{width: 80, height: 25,  justifyContent: 'center',
    alignItems: 'center'}}>
    <Text style={{color:'white', fontSize: 10}}>{this.props.name}</Text>
    </View>
  </View>
    );
  }
}