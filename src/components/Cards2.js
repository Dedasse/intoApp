import {View, Text, StyleSheet,FlatList, TouchableOpacity,Image,ImageBackground} from 'react-native'
import {Card} from 'react-native-shadow-cards';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Icon } from "@react-native-material/core";

const Cards2 = ({title, navigation}) => {
  const [classe, setClasse] = useState([])
  const [picture, setPicture] = useState([])

  useEffect(() => {
      axios({
      method: 'get',
      url: `https://backend1.fly.dev/article/${title.id}`,
      responseType: 'json'
    })
        .then(function (response) {
          
        console.log("12 ",title)
          
        setClasse(response.data)
      });
  }, [])
  
    
  return (
    <View style={styles.cards}>
      <TouchableOpacity style={styles.click2} onPress={() => navigation.navigate('Links', classe)}>
      <Text>{title.name} <Icon name="chevron-right" size={16} /></Text>
      </TouchableOpacity>
      <FlatList
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
          data={classe}
        renderItem={({item}) =>
        <View style={styles.cards2} title={item} >
            
            <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('Article',item)}>
             <Image source={{uri: `${item.picture}`}} style={styles.image} containerStyle={{
                elevation: 2,
              }}/>
              <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
          </View>}
          keyExtractor={item => item.id} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {height: 200, width: '100%' },
  text: {position: 'absolute', top: 50, left: 0, right: 0, bottom: 0, justifyContent: 'center', fontSize: 12, textAlign:'center', fontWeight: 'bold',color:'lightblue',},
  click: {height: 100, backgroundColor: 'white', margin: 5, flex: 1,overflow:'hidden'},
  cards2: {height: 180, width: 160,  flex: 1,justifyContent: 'center',alignItems: 'center'},
  image: { height: 150, width: 150,resizeMode: 'contain' , elevation: 3,margin: 5,borderRadius:10}
})

export default Cards2