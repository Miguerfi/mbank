import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const transFfocus = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get("screen").height,
    padding: 10,
  },
  closebutton: {
    marginTop: 30,
  },
  textHeader: {
    marginTop: 30,
    fontWeight: "500",
    fontSize: RFValue(30),
    marginLeft: 20,
  },
  textInfo: {
    fontSize: RFValue(20),
    color: "grey",
    marginLeft: 20,
    marginTop: 10,
  },
  textInput: {
    marginLeft: 15,
    fontSize: RFValue(20),
    marginTop: 10,
    color: "grey",
    fontWeight: "bold",
    padding: 10,
  },
  textMoney: {
    fontWeight: "bold",
  },
  sendButton: {
    backgroundColor: "#830ad1",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: responsiveHeight(35),
  },
  buttonIco: {
    marginTop: 5,
  },
});

export default transFfocus;
