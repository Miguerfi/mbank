import { StyleSheet } from "react-native";

import Constants from "expo-constants";
const operacoesStyle = StyleSheet.create({
  main: {
    height: 170,
  },
  list: {
    height: 170,
  },
  pix: {
    width: 35,
    height: 35,
    marginTop: -3,
  },
  transferencia: {
    width: 50,
    height: 50,
    marginTop: -10,
  },
  barcode: {
    marginTop: -7.5,
    marginLeft: 2,
  },
  cell: {
    marginTop: -5,
    width: 40,
    height: 40,
  },
  deposito: {
    width: 55,
    height: 55,
    marginTop: -5,
  },
  internacional: {
    width: 50,
    height: 50,
    marginTop: -6,
  },
  cobrar: {
    width: 45,
    height: 45,
    marginTop: -5,
  },
  doacao: {
    width: 42,
    height: 42,
    marginTop: -4,
  },
});

export default operacoesStyle;
