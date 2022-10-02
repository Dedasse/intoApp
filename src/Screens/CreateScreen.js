import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context } from "../context/DairyContext";
import DairyPostForm from "../components/DairyPostForm";

const CreateScreen = ({ navigation }) => {
  const { addDairyPost } = useContext(Context);

  return (
    <DairyPostForm
      onSubmit={(title, content) => {
        addDairyPost(title, content, () => navigation.navigate("Dairy"));
      }}
    />
  );
};

export default CreateScreen;
