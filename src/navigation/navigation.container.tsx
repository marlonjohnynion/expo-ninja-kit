import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { AppStackNavigator } from "./navigators/app-stack.navigator";

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppStackNavigator />
    </NavigationContainer>
  );
};
