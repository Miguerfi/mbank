import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const transF = StyleSheet.create({
  headerText: {
    fontWeight: "500",
    fontSize: RFValue(25),
    paddingRight: 10,
    marginLeft: 15,
  },
  closebutton: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 30,
  },
  valueText: {
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "bold",
    color: "grey",
    fontSize: RFValue(20),
  },
  valuechange: {
    fontSize: RFValue(42),
    fontWeight: "bold",
    marginLeft: responsiveHeight(11, Dimensions.get("screen").width),
    marginTop: 30,
  },
  drawline: {
    height: 2,
    backgroundColor: "#efefef",
    width: 320,
    marginLeft: 15,
  },
  right: {
    marginTop: responsiveHeight(48.5, Dimensions.get("screen").height),
    backgroundColor: "#830ad1",
    height: 60,
    width: 60,
    alignSelf: "flex-end",
    marginRight: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  rightIcon: {
    marginTop: 13.5,
  },
  moneyType: {
    fontSize: RFValue(45),
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 25,
    position: "absolute",
  },
  invalidValue: {
    color: "red",
  },
  textInputMessage: {
    marginLeft: 15,
    fontSize: RFValue(20),
    marginTop: 10,
    color: "grey",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#efefef",
    borderRadius: 50,
  },
});

export default transF;
