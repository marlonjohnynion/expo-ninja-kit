import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HomeContainer } from "../../modules/home/home.container";
import { HomeScreen } from "../../modules/home/home.screen";
import { Routes } from "../routes";

export type AppStackParamList = {
  [Routes.APP_STACK__HOME]: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const Home = HomeContainer(HomeScreen);

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.APP_STACK__HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.APP_STACK__HOME} component={Home} />
    </Stack.Navigator>
  );
};
