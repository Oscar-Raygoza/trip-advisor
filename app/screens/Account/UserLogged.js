import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "firebase";

const UserLogged = () => {
  return (
    <View>
      <Text>UserLogged</Text>
      <Button
        title="signOut"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </View>
  );
};

export default UserLogged;

const styles = StyleSheet.create({});
