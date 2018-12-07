import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Dimensions,
  Button,
  Linking,
  TouchableOpacity
} from 'react-native';


export default class CategoryList extends Component {
  render() {
      let gameLink = this.props.gameLink;

    return (
    <View style={{width: 75, height: 100, margin: 8, marginBottom:5, marginTop: 0}}>
    <Image
      style={{width: 75, height: 70, flex: 1, borderRadius: 10, resizeMode:'stretch'}}
      source={this.props.imageUri}
    />
    <View>
    <View style={{width:75,height: 30, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 10}}>{this.props.name}</Text>
    </View>
    <TouchableOpacity  style={styles.button} onPress={ ()=> Linking.openURL(gameLink) } >
      <Text style={{color: 'white', fontSize: 12}}>Play</Text>
    </TouchableOpacity>
    {/* <Text style={{fontSize: 10}}>{gameLink}</Text> */}
    </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#F74444',
      height:20,
      padding: 0,
      borderRadius: 10
    },
  })
  
  