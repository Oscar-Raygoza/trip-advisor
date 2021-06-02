import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//* Components
import LoginForm from "../../components/Account/LoginForm";

import Toast from "react-native-easy-toast";
const Login = () => {
  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/trip-advisor-logo-xl.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Toast ref={toastRef} position="center" opacity={0.7} />
    </ScrollView>
  );
};
function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aun no tienes una cuanta?{" "}
      <Text
        onPress={() => {
          navigation.navigate("register");
        }}
        style={styles.btnRegister}
      >
        Régistrate
      </Text>
    </Text>
  );
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00A680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00A680",
    margin: 40,
  },
});
