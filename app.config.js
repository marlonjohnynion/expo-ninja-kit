module.exports = {
  expo: {
    name: "React Native Modular",
    slug: "react-native-modular",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "modular.app",
      config: {
        usesNonExemptEncryption: false,
      },
      buildNumber: process.env.BUILD_NUMBER,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "modular.app",
      versionCode: process.env.VERSION_CODE,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {},
    owner: "ninjaengineers",
  },
};
