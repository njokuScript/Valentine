import React from "react";
import {
  Text,
  View,
  style,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default class YesHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/love.gif")}
        />
        <Text style={styles.textStyle1}>
          As long as there is me, your heart will be the best it can ever be. To
          keep your heart unbroken is a promise I am willing to keep. I love you
          babee.
        </Text>
        <Text style={styles.textStyle2}>
          Awwwwwnnnnn🙈🙈🌹 I love you too babe.
        </Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            <Text style={styles.buttonTextStyle}>SAY YES AGAIN😍😊</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  textStyle1: {
    alignItems: "center",
    width: 342,
    height: 250,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
    opacity: 1,
    top: 20
  },
  textStyle2: {
    alignItems: "center",
    width: 342,
    height: 93,
    textAlign: "center",
    fontWeight: "300",
    fontSize: 20,
    color: "#607083",
    opacity: 1,
    marginTop: 10
  },
  containerButton: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "#FE3898",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    borderRadius: 15,
    opacity: 1,
    width: 329,
    height: 58
  },
  buttonTextStyle: {
    textAlign: "center",
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    top: 7
  }
});
