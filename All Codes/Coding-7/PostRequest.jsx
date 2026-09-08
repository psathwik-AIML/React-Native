import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const PostRequest = () => {
  // use state to store posts data from api
  const [posts, setPosts] = useState([]);
  //   useState to store post data
  const [title, setTitle] = useState("");
  //   use effect to render data on mount
  useEffect(() => {
    fetchData();
  }, []);
  //   function to fetch data from api
  async function fetchData() {
    let request = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=4",
    );
    let result = await request.json();
    setPosts(result);
  }
  //   function to post data
  async function postData() {
    let request = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    let result = await request.json();
    let newPost = {
      id: posts.length + 1,
      title: result.title,
    };
    setPosts([newPost, ...posts]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Title:</Text>
        <TextInput
          placeholder="Enter title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Button title={"add post"} onPress={postData} />
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.heading}>Card - {item.id}</Text>
              <Text style={styles.body}>{item.title}</Text>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>List is Empty</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  card: {
    boxShadow: "0px 2px 5px rgba(0,0,0,0.6)",
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#ddd",
    borderRadius: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 20,
    color: "blue",
  },
  empty: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 100,
  },
  inputBox: {
    backgroundColor: "#f2f2f2",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
    marginBottom: 10,
    padding: 10,
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
  },
});
export default PostRequest;
