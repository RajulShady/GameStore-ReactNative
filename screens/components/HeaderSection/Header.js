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

export default class Header extends Component {
  render() {
    const dimensions = Dimensions.get('window');
    const imageWidth = Dimensions.width;
    const imageHeight = Math.round(dimensions.width * 0.5);
    return (
        <View  style={{ width: dimensions.width,height: imageHeight, padding:10}}>
        <Image 
        style={{flex: 1, borderRadius: 10, resizeMode:'stretch'}}
        source={this.props.imageUri}
        />
      </View>
    );
  }
}