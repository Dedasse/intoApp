import { View, Text } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview';

const WebScreen = () => {
  return (
    <WebView
    source={{ uri: 'https://outlook.office365.com/owa/calendar/TyterapiaMaijuMerilinen@CompassHki.onmicrosoft.com/bookings/' }}
    style={{ marginTop: 20 }}
  />
  )
}

export default WebScreen