import React from "react";
import { Text, View } from "react-native";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Image source={require("../assets/welcome-love.gif")} />
        <Text>Jennifer Chioma Apiaka</Text>
        <Text>Will you be my Valentine?</Text>

        <View>
          <TouchableOpacity>
            <Text>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>MAD OH</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
