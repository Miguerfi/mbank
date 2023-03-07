import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import ListHorizontalInfos from "../../components/ListHorizontalInfos";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import operacoesStyle from "./style";
export default function Operacoes() {
    const pix = require('../../../img/icone-pix.png')
    const transferir = require('../../../img/1182952-200.png')
    const data = [
        { id: 1, title: 'Área Pix', icon: <Image style={operacoesStyle.pix} source={pix} /> },
        { id: 2, title: 'Transferir', icon: <Image style={operacoesStyle.transferencia} source={transferir} /> },
        { id: 3, title: 'Pagar', icon: <Ionicons name="barcode" style={operacoesStyle.barcode} size={44} color="black" /> },
        { id: 4, title: 'Recarga de Celular', icon: <MaterialCommunityIcons style={operacoesStyle.cell} name="credit-card-chip-outline" size={44} color="black" /> },
        { id: 5, title: 'Depositar', icon: <FontAwesome5 name="piggy-bank" size={30} color="black" /> },
        { id: 6, title: 'Transferir Internac.', icon: <Fontisto name="world-o" size={30} color="black" /> },
        { id: 7, title: 'Cobrar', icon: <MaterialCommunityIcons name="message-text-outline" size={30} color="black" /> },
    ]
    return (
        <View style={operacoesStyle.main}>
            <View style={operacoesStyle.list}>
                <ListHorizontalInfos data={data} />
            </View>
        </View>
    )
}
