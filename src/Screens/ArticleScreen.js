import { View, Text,Image,ImageBackground,SafeAreaView,StyleSheet,ScrollView, Button,Platform } from 'react-native'
import React,{useState} from 'react'
import * as Speech from 'expo-speech';

const ArticleScreen = (item) => {
  const [speaka,setSpeaka] = useState(false)
 

  const speak = () => {
    setSpeaka(!speaka)
    speaka? Speech.speak(item.route.params.ltext):Speech.stop()
  };
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
          <Text style={styles.text}>{item.route.params.itext}</Text>
    </ScrollView>
          <Button onPress={()=>speak} title={speaka? "KUUNTELE":"Lopeta kuuntelu" } />
    <Image style={styles.image} source={{uri: `${item.route.params.picture}`}} />
    <ScrollView style={styles.container2}>
          <Text style={styles.text2}>{item.route.params.ltext}</Text>
        
      
    </ScrollView>

      
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {height: 130,paddingTop: Platform.OS==='ios'? 0:0},
  container2: {height: '50%'},
  container3: {flex: 0.5, height: 160, margin: 5,justifyContent: 'center',alignContent:'center'},
  text: { width: '100%',color: 'lightblue', fontSize:15,fontWeight: 'bold',textAlign: 'center',paddingTop: 35},
  image: {height: 150, width: 150, marginVertical:20, alignSelf:'center'},
  image2: {height: '100%',width: '100%', opacity: .8},
  text2: {width: '90%', fontSize: 15, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'},
  button: {color: 'black',width: '10%' }
})
export default ArticleScreen