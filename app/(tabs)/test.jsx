import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function _test() {
  return (
    <>
      <View style={styles.container}>
        <Text>I am running a test here</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
