import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500">I am now a react native developer</Text>
      <StatusBar style="auto" />
      <Link href="/test" style={{ color: true }}>
        Go to test
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
