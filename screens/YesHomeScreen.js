import React from "react";
import { Text, View, style, StyleSheet } from "react-native";

export default class YesHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/rose.gif")}
        />
        <Text style={styles.textStyle1}>
          My Love, My baby, Woman of my dreams. I can't think of a better person
          to spend my life with, I Love you so much
        </Text>
        <Text style={styles.textStyle2}>
          Awwwwwnnnnn🙈🙈🌹 I love you too babe.
        </Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.navigation.navigate("Yes")}
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
  imageStyle: {
    top: 50
  },
  textStyle1: {
    alignItems: "center",
    width: 342,
    height: 93,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 27,
    color: "#000",
    opacity: 1
  },
  textStyle2: {
    alignItems: "center",
    width: 342,
    height: 93,
    textAlign: "center",
    fontWeight: 300,
    fontSize: 20,
    color: "#cccccc",
    opacity: 1
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
  buttonStyle2: {
    backgroundColor: "#fff",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    borderRadius: 15,
    opacity: 1,
    width: 329,
    height: 58
  },
  buttontTextStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "25"
  }
});
