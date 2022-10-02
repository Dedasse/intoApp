import { View, Text, SafeAreaView,StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Icon } from "@react-native-material/core";

const LinksScreen = (items) => {

  const [artic, setArtic] = useState([])
  const [fartic,setFArtic] = useState([])
  const [term,setTerm] = useState("")
  useEffect(() => {
    const artik = axios({
      method: 'get',
      url: `https://backend1.fly.dev/article/${items.route.params.classe_id}`,
      responseType: 'json'
    })
      .then(function (response) {
        console.log("123 ", response.data)
        setArtic(response.data)
        setFArtic(response.data)
      });
  },[])


  const search = (input) => {
    let data = artic
    let searchData = data.filter((item) => {
     return  item.title.toLowerCase().includes(input.toLowerCase())
    })                   
    setTerm(input)
    setFArtic(searchData)
    }
  

  return (
    <SafeAreaView>
        <ImageBackground style={styles.image} source={{uri: `https://backend1.fly.dev/public/uploads/${items.route.params.picture}`}} >
    <View style={styles.container}>
          <Text style={styles.text}>TYYNI<Icon name="chevron-right" size={26} color='lightblue'/>    {items.route.params.text}</Text>
          <TextInput style={styles.input} placeholder="Search"
            value={term}
            onChangeText={(newText) => {
              search(newText)
            }}
          />
        </View>
        <View style={styles.container2}>
          <FlatList 
            numColumns={2}
            data={fartic}
            renderItem={({item}) =>
              <View style={styles.container3}>
                <TouchableOpacity style={styles.click} onPress={() => items.navigation.navigate('Article',item)}>
                <ImageBackground source={{uri: `https://backend1.fly.dev/public/uploads/${item.picture}`}} style={styles.image2} >
                  <Text style={styles.text2} >{item.title}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

          </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {height: 160},
  container2: {},
  container3: {flex: 0.5, height: 160, margin: 5, backgroundColor: 'lightblue'},
  text: {height: 100, width: '100%',color: 'lightblue', fontSize:25,fontWeight: 'bold',textAlign: 'center',paddingTop: 35, elevation: 2},
  image: {height: '100%', width: '100%', opacity: 1,resizeMode: 'contain' },
  image2: {height: '100%',width: '100%', opacity: 1,resizeMode: 'cover', elevation: 3,borderRadius: 10},
  text2: {fontSize: 15, fontWeight: 'bold', textAlign: 'center'},
  input: {
    backgroundColor: "green", color: 'black', alignSelf: "center", borderWidth: 2,width: 100  }
})

export default LinksScreen