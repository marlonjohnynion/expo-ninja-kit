import React from "react";

import { HomeScreenProps } from "./home.screen";
import { selectAppVersion } from "../../store/app.slice";
import { useAppSelector } from "../../store/store";

export const HomeContainer = (Screen: React.FC<HomeScreenProps>) => {
  return function _() {
    const version = useAppSelector(selectAppVersion);
    return <Screen version={version} />;
  };
};
