import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";

const transactionInfo = StyleSheet.create({
  container: {
    height: responsiveHeight(Dimensions.get("screen").height),
  },
  closebutton: {
    marginTop: 30,
    marginLeft: 15,
  },
  textHeader:{
    fontWeight:'bold',
    fontSize:RFValue(30),
    marginLeft:15,
    marginTop:20
  },
  boxContainer:{
    marginTop:25,
    height:responsiveHeight(50),
    width:responsiveWidth(92.5),
    backgroundColor:'#efefef',
    marginLeft:15,
    borderRadius:30,
  },
  textBoxHeader:{
    fontSize:RFValue(19),
    fontWeight:'bold',
    marginLeft:20,
    marginTop:30,
  },
  textBoxInfos:{
    fontWeight:'500',
    color:'grey',
    fontSize:RFValue(15),
    marginLeft:20
  }
});

export default transactionInfo;
