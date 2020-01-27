import React from "react";
import {
  Text,
  View,
  style,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default class NoHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/broken.gif")}
        />
        <Text style={styles.textStyle1}>Nice Try Jennifer, You're Not Mad</Text>
        <Text style={styles.textStyle2}>Now Go Back And Hit YES</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Welcome")}
          >
            <Text style={styles.buttontTextStyle}>TAKE ME BACK</Text>
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
    height: 250,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 27,
    color: "#000",
    opacity: 1,
    top: 100
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
    fontSize: 22,
    marginTop: 9
  }
});
