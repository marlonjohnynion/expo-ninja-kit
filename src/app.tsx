// important imports
import "react-native-gesture-handler";
// important imports
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { NavContainer } from "./navigation/navigation.container";
import { persistor, store } from "./store/store";
import { defaultTheme } from "./theme/default.theme";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider theme={defaultTheme}>
          <NavContainer />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};
