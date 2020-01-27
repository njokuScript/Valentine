import React from "react";
import { Text, View } from "react-native";

export default class NoHomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={require("../assets/broken.gif")} />
        <Text>Nice Try Jennifer, You're Not Mad</Text>
        <Text>Now Go Back And Hit YES</Text>

        <View>
          <TouchableOpacity>
            <Text>TAKE ME BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
