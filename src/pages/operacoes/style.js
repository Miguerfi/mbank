import { StyleSheet } from "react-native";

import Constants from 'expo-constants';
const operacoesStyle = StyleSheet.create({
    main:{
        height:150,
    },
    list:{
        height:150,
        width:450,
    },
    pix:{
        width:35,
        height:35,
        marginTop:-3
    },
    transferencia:{
        width:50,
        height:50,
        marginTop:-10
    },
    barcode:{
        marginTop:-7.5,
        marginLeft:2
    },
    cell:{
        transform:[{rotate:'270deg'}],
        marginTop:-5
    }
})

export default operacoesStyle
