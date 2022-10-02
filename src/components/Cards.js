import {View, Text, StyleSheet, TouchableOpacity,Image,ImageBackground} from 'react-native'
import {Card} from 'react-native-shadow-cards';
import React from 'react'


const Cards = (title,navigation) => {
  console.log("! ",title)
  return (
    <>
      <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('PDFs',{file: title.file})}>
        <ImageBackground style={styles.cards} source={{uri: `https://backend1.fly.dev/public/thumbnails/${title.picture}.png`}}>
          <Text style={styles.text}>{title.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  cards: {height: 160, width: 120, borderColor: 'black', resizeMode: 'contain', },
  text: {position: 'absolute', top: 50, left: 0, right: 0, bottom: 0, justifyContent: 'center', fontSize: 12, textAlign:'center', fontWeight: 'bold',color:'white',},
  click: {height: 100, backgroundColor: 'white', margin: 5, flex: 1,overflow:'hidden'},
  
})

export default Cards