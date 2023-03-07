import React from "react";
import { ScrollView, View, Text } from "react-native";
import ListHorizontalInfos from "../../components/ListHorizontalInfos";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import operacoesStyle from "./style";

export default function Operacoes() {

    const data = [
        { id: 1, title: 'Área Pix', icon: <FontAwesome name="dollar" size={30} color="black" /> },
        { id: 2, title: 'Transferir', icon: <FontAwesome5 name="money-bill-wave" size={30} color="black" /> },
        { id: 3, title: 'Pagar', icon: <FontAwesome name="barcode" size={30} color="black" /> },
        { id: 4, title: 'Recarga de Celular', icon: <MaterialCommunityIcons name="cellphone" size={30} color="black" /> },
        { id: 5, title: 'Depositar', icon: <FontAwesome5 name="piggy-bank" size={30} color="black" /> },
        { id: 6, title: 'Transferir Internac.', icon: <Fontisto name="world-o" size={30} color="black" /> },
        { id: 7, title: 'Cobrar', icon: <MaterialCommunityIcons name="message-text-outline" size={30} color="black" /> },
    ]
    return (
        <View style={operacoesStyle.main}>
            <View />
            <View style={operacoesStyle.list}>
                <ListHorizontalInfos data={data} />
            </View>
        </View>
    )
}
