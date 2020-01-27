import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import YesHomeScreen from "./screens/YesHomeScreen.js";
import NoHomeScreen from "./screens/NoHomeScreen.js";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
const AppNavigation = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    Yes: {
      screen: YesHomeScreen
    },
    No: {
      screen: NoHomeScreen
    }
  },
  {
    headerMode: "none"
  }
);
const SwitchNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Yes: YesHomeScreen,
    No: NoHomeScreen
  },
  {
    initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
