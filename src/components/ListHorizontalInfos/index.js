import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";

export default function ListHorizontalInfos({ data }) {
    const navigation = useNavigation();

    const handlePress = (item) => {
        switch (item.title) {
            case "Trazer Seu Salario":
                navigation.navigate("Salario");
                break;
            case "Pagar":
                navigation.navigate("Pagamento");
                break;
            case "Transferir":
                navigation.navigate("Transferencia");
                break;
            case "Investir":
                navigation.navigate("Investimento");
                break;
            case "Pedir Extrato":
                navigation.navigate("Extrato");
                break;
            case "Cobrar":
                navigation.navigate("Cobranca");
                break;
            case "Depositar":
                navigation.navigate("Deposito");
                break;
            default:
                break;
        }
    };

    return (
        <FlatList
            style={style.flatlist}
            data={data}
            pagingEnabled
            keyExtractor={(item) => item.id.toString()}
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={60}
            decelerationRate="fast"
            overScrollMode="auto"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item)}>
                    <View style={style.list}>
                        <View style={style.icons}>{item.icon}</View>
                        <Text style={style.itemText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}
