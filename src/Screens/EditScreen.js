import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/DairyContext";
import DairyPostForm from "../components/DairyPostForm";
const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editDairyPost } = useContext(Context);

  const dairyPost = state.find((dairyPost) => dairyPost.id === id);

  return (
    <DairyPostForm
      initialValues={{ title: dairyPost.title, content: dairyPost.content }}
      onSubmit={(title, content) => {
        editDairyPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
