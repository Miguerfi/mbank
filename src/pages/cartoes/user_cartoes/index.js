import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import usrcards from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Usercards({ navigation }) {
    const ccnumber = '0123456789101214'

    const navigation_secondary = useNavigation();

    const Fisiccard = () => {
        navigation_secondary.navigate('Fisiccard');
    };
    const Virtualcard = () => {
        navigation_secondary.navigate('Virtualcard')
    }
    return (
        <View style={usrcards.main}>
            <Text style={usrcards.headerText} >Meus cartões</Text>
            <Text style={usrcards.headerTypecard}>
                Cartão físico
            </Text>
            <TouchableOpacity onPress={Fisiccard} style={usrcards.card}>
                <View style={usrcards.cardView}>
                    <Text style={usrcards.cardTextname}>
                        JOSE M A SILVA
                    </Text>
                    <Text style={usrcards.ccnumber} numberOfLines={1} ellipsizeMode="head">
                        ●●● {ccnumber.substring(0, 4)}
                    </Text>
                    <MaterialCommunityIcons style={usrcards.ccicon} name="credit-card-chip-outline" size={30} color="black" />
                    <Entypo style={usrcards.setaRight} name="chevron-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
            <Text style={usrcards.headerTypecardV}>
                Cartão virutal
            </Text>
            <TouchableOpacity onPress={Virtualcard} style={usrcards.card}>
                <View style={usrcards.cardView}>
                    <Text style={usrcards.cardTextname}>
                        Miguer
                    </Text>
                    <Text style={usrcards.ccnumber} numberOfLines={1} ellipsizeMode="head">
                        ●●● {ccnumber.substring(0, 4)}
                    </Text>

                    <MaterialCommunityIcons style={usrcards.ccicon} name="credit-card-chip-outline" size={30} color="purple" />
                    <Entypo style={usrcards.setaRight} name="chevron-right" size={24} color="purple" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={usrcards.card}>
                <Entypo style={usrcards.plusicon} name="plus" size={24} color="purple" />
                <Text style={usrcards.createccV}>
                    Criar cartão virtual
                </Text>
            </TouchableOpacity>
        </View>
    )
}
