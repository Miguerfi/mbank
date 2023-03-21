import { StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const style = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    height: responsiveHeight(35),
    width: 225,
    borderRadius: 10,
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    height: 200,
    width: 225,
  },
  infos: {
    fontWeight: "bold",
    marginTop: -35,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
  },
  button: {
    height: 35,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#830ad1",
  },
  textButton: {
    color: "white",
    fontSize: RFValue(15),
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default style;
