import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const rheight = responsiveHeight(30);

const accstyles = StyleSheet.create({
  conta: {
    marginTop: 15,
    height: 90,
    width: responsiveWidth(345),
    marginLeft: 7.5,
  },
  contaText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 3,
    color: "black",
    fontWeight: "bold",
    position: "absolute",
  },
  contaRight: {
    marginTop: 15,
    marginLeft: responsiveWidth(80),
  },
  contaDinheiro: {
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 18,
  },
  mainView: {
    flexDirection: "row",
    height: 170,
    width: 370,
  },
  iconsbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 85,
    marginLeft: responsiveWidth(70),
  },
  clickicons: {
    margin: 5,
  },
  container: {
    height: rheight,
    backgroundColor: "#830ad1",
  },
  pfpCircle: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    borderRadius: 50,
    backgroundColor: "white",
    marginTop: responsiveHeight(10),
    marginLeft: 10,
    position: "absolute",
  },
  pfpAccountName: {
    fontSize: RFValue(15, Dimensions.get("screen").width),
    fontWeight: "bold",
    color: "white",
    marginLeft: 9,
    marginTop: responsiveHeight(20),
    position: "absolute",
  },
  eyeStyle: {
    marginTop: 66,
    marginLeft: 250,
    position: "absolute",
  },
  support: {
    marginTop: 66.8,
    marginLeft: 290,
    position: "absolute",
  },
  mailbox: {
    marginTop: 65.5,
    marginLeft: 325,
  },
  pfpImage: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    borderRadius: 50,
  },
});

export default accstyles;
