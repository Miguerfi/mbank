import { StyleSheet } from "react-native";
import Constants from 'expo-constants';
const configCard  = StyleSheet.create({
    main:{
        flex:1,
        padding:30,
        marginTop:50,
    },
    viewBox:{
        width:350,
        marginTop:15,
        height:100,

    },
    headerText:{
        fontWeight:'bold',
        fontSize:18,

    },
    bodyText:{
        color:'grey',
        fontSize:15,
        paddingRight:15
    },

    switchB:{
        marginTop:-60,
        marginRight:28
    },
    headerTextWarning:{
        fontWeight:'bold',
        fontSize:18,
        color:'red',
        marginBottom:10,
    },
    setaRight:{
        position:'absolute',
        marginLeft:275,
        marginTop:-35
    },
    closebutton:{
        position:'absolute',
        marginTop:-14,
        marginLeft:12
    }
})

export default configCard
