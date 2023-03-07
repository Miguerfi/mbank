import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styleVirtual from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function Virtualcard({ navigation }) {
    const usrname = "Miguer"
    const usrfullname = "Jose M A Silva"
    const cardnumber = "5502 0854 2070 0484"
    const ccvalidate = "09/30"
    const typecard = "Gold"

    const secondary_navigation = useNavigation();
    const Confgicard = () => { secondary_navigation.navigate('ConfigCardFisic') }
    
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(cardnumber);
    };
    return (

        <ScrollView >
            <View style={styleVirtual.main} >
                <Entypo name="chevron-left" style={styleVirtual.backico} size={35.5} color="black" />
                <View style={styleVirtual.drawcircle}>
                    <MaterialCommunityIcons name="credit-card-chip-outline" style={styleVirtual.cardicon} size={50} color="black" />
                </View>
                <Text style={styleVirtual.usrnamevcHeader}>{usrname}</Text>
                <View style={styleVirtual.viewbox}>
                    <Text style={styleVirtual.textHeader}>
                        Nome
                    </Text>
                    <Text style={styleVirtual.textContent}>
                        {usrfullname}
                    </Text>
                </View>
                <View style={styleVirtual.viewbox}>
                    <Text style={styleVirtual.textHeader}>
                        Número
                    </Text>
                    <Text style={styleVirtual.textContent}>
                        {cardnumber}
                    </Text>
                    <TouchableOpacity onPress={() => copyToClipboard()} style={styleVirtual.clickCopy}>
                        <Feather name="copy" size={30} color="purple" />
                        <Text style={styleVirtual.copy}>Copiar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styleVirtual.viewbox}>
                    <Text style={styleVirtual.textHeader}>Validade</Text>
                    <Text style={styleVirtual.textContent}>{ccvalidate}</Text>
                    <Text style={styleVirtual.textHeaderleft}>CVC</Text>
                    <Text style={styleVirtual.textContentleft}>353</Text>
                </View>
                <View style={styleVirtual.viewbox}>
                    <Text style={styleVirtual.textHeader}>Mastercard</Text>
                    <Text style={styleVirtual.textContent}>{typecard}</Text>
                    <Text style={styleVirtual.textHeaderleft}>Função</Text>
                    <Text style={styleVirtual.textContentleft}>Débito e crédito</Text>
                </View>
                <View >
                    <View style={styleVirtual.circle}>
                        <Feather name="lock" style={styleVirtual.icons} size={29} color="black" />
                        <Text style={styleVirtual.circleText}>Bloquear</Text>
                    </View>
                    <TouchableOpacity style={styleVirtual.click} onPress={Confgicard} >
                        <View  style={styleVirtual.circle2}>
                            <Ionicons name="settings-outline" style={styleVirtual.icons} size={30} color="black" />
                            <Text style={styleVirtual.circleText}>Configurar</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}  
