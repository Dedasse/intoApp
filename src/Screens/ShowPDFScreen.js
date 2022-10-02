import React from 'react'


import { StyleSheet, Dimensions, View , Text} from 'react-native';
import { WebView } from 'react-native-webview';


const ShowPDFScreen = ({route}) => {
  const {file} = route.params
  return (
      <WebView source={{ uri: 'https://reactnative.dev/' }} />
  )
}

export default ShowPDFScreen