import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Provider } from "./src/context/DairyContext";
import 'react-native-gesture-handler';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import HomeScreen from './src/Screens/HomeScreen';
import DairyScreen from './src/Screens/DairyScreen';
import VideoScreen from './src/Screens/VideoScreen';
import PicturesScreen from './src/Screens/PicturesScreen';
import ArticleScreen from './src/Screens/ArticleScreen';
import LinksScreen from './src/Screens/LinksScreen';
import EditScreen from './src/Screens/EditScreen';
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';
import ShowPDFScreen from './src/Screens/ShowPDFScreen';
import WebScreen from './src/Screens/WebScreen';
import {ScreenStackHeaderBackButtonImage} from 'react-native-screens';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Home' headerMode={'none'}  >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dairy" component={DairyScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Pictures" component={PicturesScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Links" component={LinksScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="PDFs" component={ShowPDFScreen} />
        <Stack.Screen name="Web" component={WebScreen} />
      </Stack.Navigator>
        </NavigationContainer>
        </IconComponentProvider>
        </Provider>
  )

  
}