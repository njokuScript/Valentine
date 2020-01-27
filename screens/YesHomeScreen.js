import React from "react";
import { Text, View, Style } from "react-native";

export default class YesHomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={require("../assets/rose.gif")} />
        <Text>
          My Love, My baby, Woman of my dreams. I can't think of a better person
          to spend my life with, I Love you so much
        </Text>
        <Text>Awwwwwnnnnn🙈🙈🌹 I love you too babe.</Text>

        <View>
          <TouchableOpacity>
            <Text>SAY YES AGAIN😍😊</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
