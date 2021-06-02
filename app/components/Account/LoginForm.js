import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

//** Components */
import Loading from "../Loading";

import firebase from "firebase";

//* Utils
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";

const LoginForm = (props) => {
  const { toastRef } = props;
  const [formData, setFormData] = useState(defaultFormValues());
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({
      ...formData,
      [type]: e.nativeEvent.text,
    });
    console.log(e.nativeEvent.text);
  };

  const onSubmit = () => {
    console.log(formData);
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los datos campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El Email no es valido");
    } else {
      setLoading(true);

      firebase
        .auth()
        .signInWithEmailAndPassword(
          formData.email.toLocaleLowerCase().trim(),
          formData.password
        )
        .then((res) => {
          console.log(res);
          setLoading(false);
          navigation.navigate("account");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toastRef.current.show("Email o password incorrectos!");
        });
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        password={true}
        secureTextEntry={showPassword}
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Register Now"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="iniciando sesión" />
    </View>
  );
};

function defaultFormValues() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  inputForm: {
    marginTop: 20,
    width: "100%",
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00A680",
  },
  iconRight: {
    color: "#c1c1c1",
    fontSize: 19,
  },
});

export default LoginForm;
