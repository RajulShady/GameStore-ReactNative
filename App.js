import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';

import Trending from './screens/components/TrendingSection/Trending';
import Header from './screens/components/HeaderSection/Header';
import Category from './screens/components/CategorySection/Category';
let gameData = require('./Data/data.json');


// type Props = {};
export default class App extends Component {

  render() {
    const imageWidth = Dimensions.get('window').width;
    const imageHeight = Math.round(imageWidth * 0.5);

    let gameDataKeys = Object.keys(gameData.data);
    let gameCategories = gameData.categories;
    let urlArray = [];
    let rankArray = [];
    let imageDataWithRank = {};
    gameDataKeys.forEach(e => {
      let rankKey = gameData.data[e].rank;
      imageDataWithRank[rankKey] = { 
        url: gameData.data[e].assets.image,
        name: gameData.data[e].name.en,
      }
      urlArray.push(gameData.data[e].assets.image);
      rankArray.push(rankKey);
      }
    );
    rankArray.sort((a,b)=> a-b);

    return (
      <View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{backgroundColor: "white"}}>
          { /* HEADER SECTION CODE */ }
            <View>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                {
                  urlArray.map((element)=> {
                    return (
                      <Header imageUri= {{uri: element}} />
                    );
                  })
                  
                }
              </ScrollView>
            </View>

            { /* TRENDING SECTION CODE */ }

            <View style={{width: imageWidth, height: 300, marginBottom:0, paddingBottom: 0}}>
            <ImageBackground 
              source={require('./assets/assetnew.jpg')}
              style={{margin: 10, padding: 10, borderRadius: 10, marginBottom:0}}>
              <Text style={{fontSize: 20, color: 'white', marginBottom:10}}>Trending Now</Text>
              <View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {
                  rankArray.map(element => {
                    return (
                      <Trending name = {imageDataWithRank[element].name.toUpperCase()} imageUri={{uri:imageDataWithRank[element].url}}/>
                    );
                  })
                }            
                </ScrollView>
              </View>
              </ImageBackground>
            </View>

            { /* CATEGORY SECTION CODE */ }

            {
              gameCategories.map(element => {
                return (
                  <View style={{marginTop: 0, paddingTop: 0}}>
                  <Category categoryName = {element} />
                  </View>
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
