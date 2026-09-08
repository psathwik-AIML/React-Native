import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Refresh = () => {
  const [posts, setPosts] = useState([]);
  const [refr, setRefr] = useState(false);
  // function to fetch data from api
  async function fetchData(start, limit) {
    let req = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    );
    let res = await req.json();
    setPosts((prev) => [...prev, ...res]);
  }
  //   function to refresh
  async function handleRefresh() {
    setRefr(true);
    await fetchData(posts.length, 2);
    setRefr(false);
  }
  useEffect(() => {
    fetchData(0, 3);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lists}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={{ fontSize: 24, fontWeight: 600 }}>
                  {item.id}-{item.title}
                </Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
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
          refreshing={refr}
          onRefresh={handleRefresh}
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
});
export default Refresh;
