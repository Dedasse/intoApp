import {View, Text, Button, StyleSheet, Image, FlatList, SafeAreaView} from 'react-native'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'

const serverURL = 'https://backend1.fly.dev/'
const HomeScreen = ({navigation}) => {
  var mypic = require('../../assets/icon.png')
  
  const [titlePic, setTitlePic] = useState()
  const [titleText, setTitleText] = useState('')
  const [tietoa,setTietoa] = useState([])
  const setT = (tama)=>{setTitlePic(tama)}

  useEffect(() => {
    console.log('effect')
    const texti = async () => {
      await axios({
        method: 'get',
        url: 'https://backend1.fly.dev/title_text/1',
        responseType: 'json'
      })
      .then(function (response) {
        console.log("response ", JSON.stringify(response.data[0].name))
        setTitleText(response.data[0].name)
       
      });
    }
    const kuva = async () => {
      await axios({
        method: 'get',
        url: 'https://backend1.fly.dev/title_pic/1',
        responseType: 'json'
      })
        .then(function (response) {
          console.log("kuva ", response.data.picture)
          setT(response.data.picture)
         
        });
    }
    const categoryy = async () => {
      await axios({
        method: 'get',
        url: 'https://backend1.fly.dev/category',
        responseType: 'json'
      })
        .then(function (response) {
          setTietoa(response.data)
        });
    }
    texti()
    kuva()
    categoryy()
    return console.log("AYAA")
  }, [])
    
    return (
    <SafeAreaView>
        <View style={styles.container}>
        <View style={styles.title}>
            <Image source={{uri: `https://backend1.fly.dev/public/thumbnails/${titlePic}`}} style={styles.image} containerStyle={{
                elevation: 2,
              }}/>
          <View style={styles.title2}>
            <Text style={styles.text}>{titleText}</Text>
            <Text style={styles.text2}>Tämä on into, uusi tapa hoitaa työhyvinvointia</Text>
          </View>
          </View>
          
       
      <View style={styles.container2}>
            <FlatList
              scrollEnabled={true}
              data={tietoa}
              renderItem={({item}) => <Cards2 title={item} navigation={navigation} />}
              keyExtractor={item => item.id}
            />
      </View>
    
      <View style={styles.container3}>
        <Button title='Lähetä viesti'  />
        <Button title='Varaa aika' onPress={() => navigation.navigate('Web')}/>
 
      </View>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white', paddingTop: 20},
  title: {height: 150, width: '90%', flexDirection: 'row',color: 'lightblue'},
  container2: {flexDirection: 'row',flexGrow: 1, overflow: 'hidden',flex: 1},
  container3: {flexDirection: 'row',justifyContent: 'space-around',marginTop: 10},
  image: {
    height: 120, width: 120,
    borderWidth: 8, borderColor: 'black',
    resizeMode: 'contain', transform: [{rotate: '20deg'}],
    alignSelf: 'center', marginLeft: 50,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
   
  },
  text: {
    alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold',color: 'lightblue',alignSelf: 'center'
  },
  texts: {fontSize: 15, fontWeight: 'bold',color: 'lightblue'},
  title2: {width: 150,height: 150,flexDirection: 'column',justifyContent: 'center'},
  text2: {alignSelf: 'center', fontSize: 13,color: 'lightblue',justifyContent: 'center',}
})
export default HomeScreen