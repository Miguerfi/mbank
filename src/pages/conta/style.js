import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const accstyles = StyleSheet.create({
    conta:{
        marginTop:10,
        height:90, 
        width:345,        
        marginLeft:7.5,
    },
    contaText:{
        fontSize:RFValue(13,Dimensions.get('screen').width), 
        marginTop:10,
        marginLeft:3,
        color:'black',
        fontWeight:'bold',
        position:'absolute'
    },
    contaRight:{
        marginTop:RFValue(15,Dimensions.get('screen').width),
        marginLeft:RFValue(335,Dimensions.get('screen').height)
    },
    contaDinheiro:{
        marginLeft:RFValue(6,Dimensions.get('screen').height),
        fontWeight:'bold',
        fontSize:RFValue(11,Dimensions.get('screen').width),
        position:'absolute',
        marginTop:RFValue(40,Dimensions.get('screen').height),
    }

    
})

export default accstyles;
