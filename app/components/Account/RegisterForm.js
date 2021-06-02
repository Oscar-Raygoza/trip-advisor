import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

//** Components */
import Loading from "../Loading";

import firebase from "firebase";

import { useNavigation } from "@react-navigation/native";

//* Utils
import { validateEmail } from "../../utils/validations";
import { size, isEmpty } from "lodash";

function RegisterForm(props) {
  const { toastRef } = props;
  console.log(toastRef);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordAgain, setShowPasswordAgain] = useState(true);
  const [formData, setFormData] = useState(defaultFormValues());
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = () => {
    console.log(formData);
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      toastRef.current.show("Todos los datos campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El Email no es valido");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las Contraseñas no son iguales!");
    } else if (size(formData.password) < 6) {
      toastRef.current.show(
        "La contraseña tiene que tener por lo menos 6 caracteres"
      );
    } else {
      setLoading(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(
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
          toastRef.current.show("Este usuario ya existe!");
        });
    }
  };

  const onChange = (e, type) => {
    setFormData({
      ...formData,
      [type]: e.nativeEvent.text,
    });
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
      <Input
        placeholder="Password Again"
        password={true}
        secureTextEntry={showPasswordAgain}
        onChange={(e) => onChange(e, "repeatPassword")}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name={showPasswordAgain ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPasswordAgain(!showPasswordAgain)}
          />
        }
      />
      <Button
        title="Register Now"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Creating account" />
    </View>
  );
}

function defaultFormValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default RegisterForm;
