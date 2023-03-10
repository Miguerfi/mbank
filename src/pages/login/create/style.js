import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const createaccountStyle = StyleSheet.create({
    container: {
        height:Dimensions.get('screen').height,
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        height:responsiveHeight(8),
        marginTop:10,
        backgroundColor: '#830ad1',
        width:responsiveWidth(50),
        borderRadius:50
    }

})

export default createaccountStyle 
