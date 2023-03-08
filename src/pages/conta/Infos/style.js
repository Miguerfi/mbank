import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const infoStyle = StyleSheet.create({
    header:{
        marginTop: RFValue(26,Dimensions.get('screen').height)

    },
    backbutton:{
        marginLeft:13.5,
        marginTop:15,
    },
    textInfo:{
        fontSize:RFValue(23,Dimensions.get('screen').height),
        color:'grey',
        marginLeft:13,
        fontWeight:'bold',
        marginTop:45
    },
    saldoInfo:{
        fontSize:RFValue(38,Dimensions.get('screen').height),
        fontWeight:'bold',
        marginLeft:13,
        marginTop:RFValue(25,Dimensions.get('screen').height),
    },
    guardadoInfo:{
        marginTop:RFValue(50,Dimensions.get('screen').height),
        marginLeft:RFValue(15,Dimensions.get('screen').height)

    },
    piggy:{
        position:'absolute',
        marginTop:RFValue(10,Dimensions.get('screen').height),
        
    },
    dinheiroGInfo:{
        marginLeft:RFValue(49,Dimensions.get('screen').height),
        color:'grey',
        fontSize:RFValue(22,Dimensions.get('screen').height),
    },
    dinheiroInfo:{
        marginLeft:49,
        fontSize:18,
        color:'grey',
        fontWeight:'bold'
    },
    setaRight:{
        position:'absolute',
        marginTop:10,
        marginLeft:RFValue(165,Dimensions.get('screen').width),
        color:'grey',
        fontWeight:'bold'
    },
    rendimentoContainer:{
        marginTop:40,
        marginLeft:15
    },
    rede:{
        position:'absolute',
        marginTop:10,
    },
    rendimentoimes:{
        marginLeft:49,
    },
    rendimento:{
        color:'green',
        fontSize:18,
        fontWeight:'bold'
    },
    mes:{
        fontSize:18,
    },
    rendimentoTotal:{
        marginLeft:49,
        fontSize:19,
        color:'grey'
    },
    histHeader:{
        marginTop:30,
        height:270,
        position:'relative'
    },
    histMaintext:{
        fontWeight:'bold',
        fontSize:19,
        marginLeft:18,
        marginTop:30,
    },
    searchhistButton:{
        marginLeft:22,
        marginTop:-33.5,
        position:'absolute',
        width:55,
        height:40,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        top:-5,
        alignItems:'center'
        
    },
    searchhistButtonItem:{
        marginTop:6,        
        marginRight:15

    },    
    histtextInput:{
        height:40,
        backgroundColor: '#efefef',
        borderRadius:30,
        paddingLeft:55,
        width:270,
        marginLeft:15,
        marginTop:10,
        fontWeight:'bold',
        fontSize:19
    },

    
})

export default infoStyle
