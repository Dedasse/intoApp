import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/DairyContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route,navigation }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const dairyPost = state.find((dairyPost) => dairyPost.id === id);
  return (
    <View>
      <Text>{dairyPost.title}</Text>
      <Text>{dairyPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Text>Shit</Text>
        <EvilIcons name="pencil" size={35} color="black" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({});

export default ShowScreen;
