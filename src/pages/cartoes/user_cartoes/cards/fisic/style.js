import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const fscard = StyleSheet.create({
    main: {
        height: 1100,
        flex: 1,
        paddingRight: 10,
        marginTop: Constants.statusBarHeight
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 129,
        marginTop: 50,
    },
    closebutton: {
        marginTop: 14,
        position: 'absolute',
        marginLeft: 13,
    },
    drawcc: {
        height: 252,
        width: 150,
        marginTop: 100,
        marginLeft: 107.5,
        borderRadius: 10,
    },
    namecc: {
        position: 'absolute',
        color: 'white',
        marginTop: 155,
        marginLeft: 15,
    },
    texture: {
        flex: 1,
    },
    basecard: {
        position: 'absolute',
    },
    circle: {
        backgroundColor: '#C0C0C0',
        height: 80,
        width: 80,
        borderRadius: 50,
        marginLeft: 53,
        marginTop: 60,
        marginRight: 5,
        position: 'absolute',
        alignItems: 'center',
    },
    circle2: {
        backgroundColor: '#C0C0C0',
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 5,
        alignItems: 'center',
        position: 'absolute',
    },
    circleText: {
        height: 375,
        marginTop: 105,
        fontWeight: 'bold',
        fontSize: 16,

    },
    icons: {
        position: 'absolute',
        marginTop: 22.5,
    },
    refresh: {
        marginTop: 15,
        height: 1100
    },
    infocard: {
        height: 210,
        width: 310,
        marginTop: 270,
        marginLeft: 25.11,
        backgroundColor: '#efefef',
        borderRadius: 10,
    },
    infocardHeaderText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 10,
        color: 'grey'
    },
    infoboxText: {
        color: 'grey',
        marginLeft: 10,
        fontSize: 16
    },
    clickText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
        marginTop: 11.2
    },
    arrowright: {
        position: 'absolute',
        marginTop: 12,
        marginLeft: 165,
    },
    usrcchead: {
        color: '#A9A9A9',
        fontSize: 15,
        marginLeft: 15,
        marginTop: 25,
        fontWeight: 'bold'
    },
    usrccinfo: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 16
    },
    usrcctype: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'grey'
    },
    usrfunchead: {
        position: 'absolute',
        marginLeft: 160,
        marginTop: 25,
        color: '#A9A9A9',
        fontWeight: 'bold',
        fontSize: 16,
    },
    usrfuncinfo: {
        position: 'absolute',
        marginLeft: 160,
        marginTop: 47,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sizebox:{
        height:110,
    },
    click:{
        width:80,
        height:80,
        position:'absolute',
        marginLeft:240,
        marginTop:60,
        borderRadius:50,

    }

})

export default fscard
