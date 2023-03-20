import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const creditStyle = StyleSheet.create({
  container: {
    height: 100,
  },
  textHeader:{
    fontWeight:'bold',
    fontSize:RFValue(17),
    marginLeft:20
  },
  textFatura:{
    marginLeft:20,
    color:'grey',
    marginTop:10,
    fontSize:RFValue(15)
  },
  textMoney:{
    marginLeft:20,
    fontWeight:'bold',
    fontSize:RFValue(18)
  }
});

export default creditStyle;
