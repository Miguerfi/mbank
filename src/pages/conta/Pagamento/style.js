import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const pgtStyle = StyleSheet.create({
  container: {
    height: 600,
    padding: 2,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 30,
    paddingRight: 20,
    marginLeft: 20,
    marginTop: 85,
  },
  closebutton: {
    height:30,
    width:30,
    borderRadius:50,
    alignItems:'center',
    marginLeft:15,
    marginTop:30,
    position:'absolute'
  },
  headerQRCODE: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 60,
    marginTop: 40,
  },
  mainQRCODE: {
    marginTop: 5,
    marginLeft: 60,
    color: "grey",
    fontSize: 18,
    paddingRight: responsiveWidth(25),
  },
  QRCODE: {
    marginTop: 85,
    position: "absolute",
    marginLeft: 15,
  },
  ccc: {
    color: "#830ad1",
    fontSize: 19,
  },
  stRight: {
    position: "absolute",
    marginTop: 85,
    marginLeft: responsiveWidth(90),
  },
  newView: {
    position: "absolute",
    width: 55,
    height: 25,
    borderRadius: 5,
    backgroundColor: "#830ad1",
    alignItems: "center",
    marginTop: 85,
    marginLeft: responsiveWidth(75),
  },
  newText: {
    color: "white",
    fontSize: 18,
  },
  paycreditcard: {
    marginTop: 60,
    position: "absolute",
    marginLeft: 15,
  },
  stRightpc: {
    position: "absolute",
    marginTop: 60,
    marginLeft: 325,
  },
});

export default pgtStyle;
