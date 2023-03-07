import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import accstyles from "./style";
import { AntDesign } from '@expo/vector-icons';
import Infos from "./Infos";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

export default function ContaInfos() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('a');
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress} style={accstyles.conta}>
                <Text style={accstyles.contaText}>Conta</Text>
                <Entypo style={accstyles.contaRight} name="chevron-right" size={30} color="black" />
                <Text style={accstyles.contaDinheiro}>R$800,25</Text>
            </TouchableOpacity>
        </View>
    )
}
