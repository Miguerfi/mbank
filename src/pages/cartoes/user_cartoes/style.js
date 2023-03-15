import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const usrcards = StyleSheet.create({
  main: {
    marginTop: 110,
    marginLeft: 30,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  backbutton: {
    position: "absolute",
    marginTop: -75,
    marginLeft: -16.5,
  },
  headerTypecard: {
    marginTop: 20,
    fontSize: 17,
    color: "grey",
    fontWeight: "bold",
  },
  card: {
    marginTop: 15,
  },
  cardView: {
    marginTop: 15,

    backgroundColor: "#efefef",
    height: 50,
    width: 250,
    borderRadius: 15,
  },
  cardTextname: {
    marginTop: 7.5,
    marginLeft: 55,
    fontWeight: "bold",
    fontSize: RFValue(13.5),
    color: "grey",
  },
  ccnumber: {
    marginTop: 0,
    marginLeft: 55,
    fontWeight: "bold",
    fontSize: 13,
    color: "grey",
  },
  ccicon: {
    position: "absolute",
    marginTop: 10.5,
    transform: [{ rotate: "90deg" }],
    marginLeft: 9,
  },
  setaRight: {
    marginTop: -32.5,
    marginLeft: 215,
  },
  headerTypecardV: {
    marginTop: 70,
    fontSize: 17,
    color: "grey",
    fontWeight: "bold",
  },
  createccV: {
    color: "purple",
    marginTop: 30,
    fontWeight: "bold",
    marginLeft: 30,
    fontSize: 18,
  },
  plusicon: {
    position: "absolute",
    marginTop: 30,
  },
});

export default usrcards;
