import React from "react";
import {
  Text,
  View,
  StyleSheet,
  style,
  Image,
  TouchableOpacity
} from "react-native";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/welcome-love.gif")}
        />
        <Text style={styles.textStyle1}>Jennifer Chioma Apiaka</Text>
        <Text style={styles.textStyle2}>Will you be my Valentine?</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Yes")}
          >
            <Text style={styles.buttonTextStyle}>YES!!!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle2}
            onPress={() => this.props.navigation.navigate("No")}
          >
            <Text style={styles.buttonTextStyle2}>MAD OH</Text>
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
    fontSize: 27,
    color: "#000",
    opacity: 1,
    top: 120
  },
  textStyle2: {
    alignItems: "center",
    width: 342,
    height: 93,
    textAlign: "center",
    fontWeight: "300",
    fontSize: 22,
    color: "#607083",
    opacity: 1,
    bottom: 50
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
    height: 58,
    marginBottom: 20
  },
  buttonStyle2: {
    backgroundColor: "#fff",
    borderRadius: 15,
    opacity: 1,
    width: 329,
    height: 58,
    borderColor: "#0000",
    borderWidth: 2
  },
  buttonTextStyle2: {
    textAlign: "center",
    color: "#FE3898",
    fontWeight: "bold",
    fontSize: 22
  },
  buttonTextStyle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10
  }
});
