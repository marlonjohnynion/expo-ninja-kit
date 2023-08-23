import { registerRootComponent } from "expo";
import { LogBox } from "react-native";

import { App } from "./src/app";

LogBox.ignoreLogs([
  "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
]);

registerRootComponent(App);
