import { StyleSheet } from "react-native";

const styleVirtual = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  main: {
    marginTop: 115,
    padding: 30,
    height: 750,
    flex: 1,
  },
  usrnamevcHeader: {
    fontWeight: "500",
    fontSize: 30,
    textAlignVertical: "top",
  },
  drawcircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#efefefef",
    marginLeft: -10,
    marginTop: -40,
  },
  cardicon: {
    transform: [{ rotate: "90deg" }],
    marginTop: 10,
  },
  backico: {
    marginTop: -80.5,
    marginLeft: 8,
    position: "absolute",
  },
  viewbox: {
    marginTop: 80,
    marginBottom: -30,
  },
  textHeader: {
    fontSize: 15,
    color: "grey",
  },
  textContent: {
    marginTop: 5,
    fontWeight: "500",
    fontSize: 17,
  },
  clickCopy: {
    position: "absolute",
    marginLeft: 215,
    marginTop: 10,
  },
  copy: {
    position: "absolute",
    marginLeft: 35,
    width: 50,
    fontSize: 16,
    color: "purple",
    marginTop: 5,
  },
  textHeaderleft: {
    fontSize: 15,
    color: "grey",
    position: "absolute",
    marginLeft: 110,
  },
  textContentleft: {
    marginTop: 25,
    marginLeft: 110,
    fontWeight: "500",
    fontSize: 17,
    position: "absolute",
  },
  circle: {
    backgroundColor: "#efefef",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 90,
    marginRight: 5,
    position: "absolute",
    alignItems: "center",
  },
  circle2: {
    backgroundColor: "#efefef",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 5,
    alignItems: "center",
    position: "absolute",
  },
  circleText: {
    height: 375,
    marginTop: 105,
    fontWeight: "bold",
    fontSize: 16,
  },
  icons: {
    position: "absolute",
    marginTop: 22.5,
  },
  click: {
    width: 80,
    height: 80,
    position: "absolute",
    marginLeft: 200,
    marginTop: 90,
    borderRadius: 50,
  },
});

export default styleVirtual;
