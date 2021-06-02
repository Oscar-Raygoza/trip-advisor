import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import { firebaseApp } from "../../utils/firebase";

import Loading from "../../components/Loading";

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, [login]);

  if (login === null) return <Loading text="Loading..." isVisible={true} />;

  return login === true ? <UserLogged /> : <UserGuest />;
};

export default Account;

const styles = StyleSheet.create({});
