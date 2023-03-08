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
    const cellphone = require('../../../img/cellphoneicon.png')
    const deposito = require('../../../img/deposito.png')
    const transInter = require('../../../img/globo.png')
    const cobrar = require('../../../img/money-talk.png')
    const doacao = require('../../../img/heart.png')
    const data = [
        { id: 1, title: 'Área Pix', icon: <Image style={operacoesStyle.pix} source={pix} /> },
        { id: 2, title: 'Transferir', icon: <Image style={operacoesStyle.transferencia} source={transferir} /> },
        { id: 3, title: 'Pagar', icon: <Ionicons name="barcode" style={operacoesStyle.barcode} size={44} color="black" /> },
        { id: 4, title: 'Recarga de Celular', icon: <Image source={cellphone} style={operacoesStyle.cell} /> },
        { id: 5, title: 'Depositar', icon: <Image style={operacoesStyle.deposito} source={deposito} /> },
        { id: 6, title: 'Transferir Internac.', icon: <Image style={operacoesStyle.internacional} source={transInter} /> },
        { id: 7, title: 'Doação', icon: <Image style={operacoesStyle.doacao} source={doacao} /> },
        { id: 8, title: 'Cobrar', icon: <Image style={operacoesStyle.cobrar} source={cobrar} /> },
    ]
    return (
        <View style={operacoesStyle.main}>
            <View style={operacoesStyle.list}>
                <ListHorizontalInfos data={data} />
            </View>
        </View>
    )
}
