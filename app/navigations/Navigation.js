import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "react-native-elements";
/**
 ** Views
 */
import RestaruntsStack from "./RestarantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#323451",
          activeTintColor: "#F00",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaruntsStack}
          options={{
            title: "Restaurantes",
          }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{
            title: "Favoritos",
          }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{
            title: "Top 5",
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{
            title: "Buscar",
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{
            title: "Mi Cuenta",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    case "account":
      iconName = "home-outline";
      break;
  }
  return (
    <Icon type="material-community" size={22} name={iconName} color={color} />
  );
}

export default Navigation;
