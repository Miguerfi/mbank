import React, { useCallback, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import infoStyle from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ListHorizontal from "../../../components/ListHorizontalInfos";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, RefreshControl } from "react-native-gesture-handler";



export default function Infos({ navigation }) {

    const [refreshing, setRefreshing] = useState(false);
    const data = [
        { id: 1, title: 'Trazer Seu Salario', icon: <FontAwesome5 name="money-bill-alt" size={30} color="black" /> },
        { id: 2, title: 'Pagar', icon: <FontAwesome name="barcode" size={30} color="black" /> },
        { id: 3, title: 'Transferir', icon: <FontAwesome5 name="money-bill-wave" size={30} color="black" /> },
        { id: 4, title: 'Investir', icon: <MaterialCommunityIcons name="signal" size={30} color="black" /> },
        { id: 5, title: 'Pedir Extrato', icon: <AntDesign name="filetext1" size={30} color="black" /> },
        { id: 6, title: 'Cobrar', icon: <FontAwesome5 name="dollar-sign" size={24} color="black" /> },
        { id: 7, title: 'Depositar', icon: <Ionicons name="ios-download-outline" size={30} color="black" /> },
    ];

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);
    return (
        <View style={infoStyle.header}>

            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <TouchableOpacity>
                    <Ionicons name="chevron-back-outline" style={infoStyle.backbutton} size={24} color="black" />
                </TouchableOpacity>
                <Text style={infoStyle.textInfo}>Saldo disponível</Text>
                <Text style={infoStyle.saldoInfo}>R$ 800,25</Text>
                <TouchableOpacity style={infoStyle.guardadoInfo}>
                    <Text style={infoStyle.dinheiroGInfo}>
                        Dinheiro Guardado
                    </Text>
                    <Text style={infoStyle.dinheiroInfo}>
                        R$ 50000,00
                    </Text>
                    <MaterialCommunityIcons style={infoStyle.piggy} name="piggy-bank-outline" size={35} color="black" />
                    <Entypo name="chevron-right" style={infoStyle.setaRight} size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={infoStyle.rendimentoContainer}>
                    <Text style={infoStyle.rendimentoTotal}>Rendimento total da conta</Text>
                    <Text style={infoStyle.rendimentoimes}>
                        <Text style={infoStyle.rendimento}>+R$ 125,00</Text>
                        <Text style={infoStyle.mes}> este mês</Text>
                    </Text>
                    <FontAwesome5 name="signal" style={infoStyle.rede} size={22} color="black" />
                    <Entypo name="chevron-right" style={infoStyle.setaRight} size={24} color="black" />
                </TouchableOpacity>
                <View >
                    <ListHorizontal data={data} />
                </View>
                <View style={infoStyle.histHeader}>
                    <Text style={infoStyle.histMaintext}>Histórico</Text>
                    <TextInput style={infoStyle.histtextInput} placeholder="Buscar" />
                    <View >
                        <TouchableOpacity style={infoStyle.searchhistButton} >
                            <Ionicons style={infoStyle.searchhistButtonItem} name="md-search-sharp" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
