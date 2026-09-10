import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ErrorHandle = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  // function to fetch data from api
  async function fetchData() {
    try {
      let req = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      );
      let res = await req.json();
      setPosts(res);
      setError("");
    } catch (err) {
      setError("error in fetching data");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  {
    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lists}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={{ fontSize: 24, fontWeight: 600 }}>
                  {item.title}
                </Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          ListEmptyComponent={() => <Text>List is Empty</Text>}
          ListFooterComponent={() => (
            <Text
              style={{
                color: "green",
                fontSize: 30,
                textAlign: "center",
                marginBottom: 4,
              }}
            >
              End of Posts
            </Text>
          )}
          ListHeaderComponent={() => (
            <Text
              style={{
                color: "red",
                fontSize: 30,
                textAlign: "center",
                marginBottom: 4,
              }}
            >
              All Posts
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
  },
  card: {
    boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 20,
    borderRadius: 30,
  },
  error: {
    color: "red",
    fontSize: 30,
    fontWeight: 600,
    paddingVertical: 100,
    textAlign: "center",
    textTransform: "capitalize",
  },
});
export default ErrorHandle;
