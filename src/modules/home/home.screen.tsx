import { VStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";

export type HomeScreenProps = {
  version: string;
};

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View>
      <VStack justifyContent="center" alignItems="center" safeArea>
        <Text>React Native Modular</Text>
        <Text>Version: {props.version}</Text>
      </VStack>
    </View>
  );
};
