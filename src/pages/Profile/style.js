import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const pfpstyles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        height: 170,
        width:370,
    },
    pfpCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        marginTop:50,
        marginLeft:10,
        position:'absolute'
    },
    pfpAccountName:{
        fontSize:RFValue(20,Dimensions.get('screen').height),
        fontWeight:"bold",
        color:'white',
        marginLeft:9,
        marginTop:120,
        position:'absolute'
    },
    eyeStyle:{
        marginTop:66,
        marginLeft:250,
        position:'absolute'
    },
    support:{
        marginTop:66.8,
        marginLeft:290,
        position:'absolute'
    },
    mailbox:{
        marginTop:65.5,
        marginLeft:325
    }

})

export default pfpstyles;
