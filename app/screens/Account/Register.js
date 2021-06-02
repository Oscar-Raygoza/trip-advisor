import React, { useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Toast from "react-native-easy-toast";

//* Components
import RegisterForm from "../../components/Account/RegisterForm";

const Register = () => {
  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/trip-advisor-logo-xl.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast s={styles.toast} ref={toastRef} position="center" opacity={0.7} />
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
  toast: {
    marginTop: 40,
  },
});
