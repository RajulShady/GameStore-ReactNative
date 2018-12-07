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
let gameData = require('../../../Data/data.json');
import CategoryList from '../categoryList/CategoryList';
import Trending from '../TrendingSection/Trending';

export default class Category extends Component {

  render() {
    const dimensions = Dimensions.get('window');
    const imageWidth = Dimensions.get('window').width;
    const imageHeight = Math.round(dimensions.width * 0.5);

    let gameDataKeys = Object.keys(gameData.data);
    let gameCategories = gameData.categories;
    let categoryGames1 = [];
    let categoryGames2 = [];
    //let urlArray = [];
    //let rankArray = [];
    let imageDataWithRankArray = [];
    gameDataKeys.forEach(e => {
      //let rankKey = gameData.data[e].rank;
      imageDataWithRankArray.push({ 
      url: gameData.data[e].assets.image,
      name: gameData.data[e].name.en,
      categories: gameData.data[e].categories,
      gameLink: gameData.data[e].url,
    });
    //urlArray.push(gameData.data[e].assets.image);
    //rankArray.push(rankKey);
  }
  );

  categoryGames1 =  imageDataWithRankArray.filter(element => {
    if(element.categories.includes(this.props.categoryName)) {
      return element;
    }        
  });

  if (categoryGames1.length > 4) {
    categoryGames2 = categoryGames1.slice(0,4);
  }





  //rankArray.sort((a,b)=> a-b);



    return (
        <View  style={{ width: dimensions.width,height: imageHeight, marginTop: 0, paddingTop: 0}}>
          <Text style = {{fontWeight: 'bold', fontSize: 18, marginLeft: 8}}>{this.props.categoryName}</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding:10, marginLeft: 10, paddingTop:0,
           marginRight: 10,}}>
              {
                  categoryGames2.map(element => {
                    return (
                      <CategoryList name ={element.name} imageUri={{uri: element.url}} gameLink={element.gameLink} />
                    );
                  })
              }
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10, 
      marginLeft: 10,
      marginRight: 10,
    },
    viewContainer: {
        flex:1,
    }
  });