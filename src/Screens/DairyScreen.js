import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/DairyContext";
import {FlatList} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const DairyScreen = ({navigation}) => {
  const {state, deleteDairyPost, getDairyPost} = useContext(Context);
  
  useEffect(() => {
    getDairyPost();
    
    const listener = navigation.addListener("didFocus", () => {
      getDairyPost();
    });
    return () => {
      listener; //memory leak if not
    };
  }, []);

  return (
    <View>
       <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(dairyPost) => dairyPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteDairyPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

DairyScreen.screenOp = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});


export default DairyScreen