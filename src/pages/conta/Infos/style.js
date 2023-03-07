import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const infoStyle = StyleSheet.create({
    header:{
        marginTop: Constants.statusBarHeight
    },
    backbutton:{
        marginLeft:13.5,
        marginTop:15,
    },
    textInfo:{
        fontSize:23,
        color:'grey',
        marginLeft:13,
        fontWeight:'bold',
        marginTop:45
    },
    saldoInfo:{
        fontSize:38,
        fontWeight:'bold',
        marginLeft:13,
        marginTop:25
    },
    guardadoInfo:{
        marginTop:50,
        marginLeft:15,

    },
    piggy:{
        position:'absolute',
        marginTop:10
        
    },
    dinheiroGInfo:{
        marginLeft:49,
        color:'grey',
        fontSize:19,
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
        marginLeft:300,
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
        backgroundColor:'#C0C0C0',
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
