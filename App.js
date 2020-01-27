import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import YesHomeScreen from "./screens/YesHomeScreen.js";
import NoHomeScreen from "./screens/NoHomeScreen.js";
import { createStackNavigator } from "react-navigation-stack";

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
    initialRouteName: Welcome
  },
  {
    headerMode: "none"
  }
);
