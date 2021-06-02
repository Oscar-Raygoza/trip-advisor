import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const UserGuest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        style={styles.image}
        source={require("../../../assets/img/user-guest.jpg")}
      />
      <Text style={styles.title}>Consulta tu perfil de Trip View</Text>
      <Text style={styles.description}>
        ¿Como describirias el mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sido tu experiencia dentro del lugar.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="View Profile"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => {
            navigation.navigate("login");
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00A680",
  },
  btnContainer: {
    width: "70%",
  },
});

export default UserGuest;
