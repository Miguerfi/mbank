import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const paymentStyle = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 20,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: RFValue(18),
  },
  secondaryContainer: {
    padding: 5,
  },
  clickAREA: {
    marginTop: 10,
    backgroundColor: "#efefef",
    height: 60,
    width: responsiveWidth(90),
    borderRadius: 5,
    alignItems: "center",
  },
  textInfo: {
    marginTop: 15,
    fontSize: RFValue(16.5),
    fontWeight: "500",
    marginRight: 100,
    position: "absolute",
  },
  reloadmoney: {
    height: 35,
    width: 35,
    marginTop:10,
    marginRight: responsiveWidth(80),
  },
});

export default paymentStyle;
