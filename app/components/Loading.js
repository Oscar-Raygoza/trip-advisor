import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

const Loading = (props) => {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.2)"
      overleyBackgroundColor="transparent"
      overleyStyles={styles.overlay}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#F00" />
        {text && <Text style={styles.text}> {text} </Text>}
      </View>
    </Overlay>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#F00",
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#F00",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
