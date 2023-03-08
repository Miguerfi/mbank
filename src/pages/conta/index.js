import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import accstyles from "./style";
import Infos from "./Infos";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5,MaterialCommunityIcons,Entypo,AntDesign } from '@expo/vector-icons';

export default function ContaInfos() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('a');
    };

    const accountBalace = "800,25"

    const [hidevalue, sethideValue ] = useState(accountBalace)
    const hiddenvalue = "●●●●"

    return (
        <View>
            <View style={accstyles.container}>
                <View style={accstyles.mainView}>
                    <View style={accstyles.iconsbox}>
                        <TouchableOpacity onPress={() => {sethideValue(hidevalue === hiddenvalue ? accountBalace : hiddenvalue )}} style={accstyles.clickicons} >
                            <Entypo name="eye" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={accstyles.clickicons}>
                            <FontAwesome5 name="question-circle" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={accstyles.clickicons}>
                            <MaterialCommunityIcons name="email-plus-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={accstyles.pfpCircle} />
                    <Text style={accstyles.pfpAccountName}>Olá, Miguer</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handlePress} style={accstyles.conta}>
                <Text style={accstyles.contaText}>Conta</Text>
                <Entypo style={accstyles.contaRight} name="chevron-right" size={30} color="black" />
                <Text style={accstyles.contaDinheiro}>R$ {hidevalue}</Text>
            </TouchableOpacity>
        </View>
    )
}
