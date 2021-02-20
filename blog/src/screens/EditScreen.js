import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const editBlog = route.params;
  const { editBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      initialValues={{ title: editBlog.title, content: editBlog.content }}
      onSubmit={(title, content) => {
        editBlogPost(editBlog.id, title, content, () =>
          navigation.navigate("IndexScreen")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
