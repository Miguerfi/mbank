import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from './style'
import Profile from "../Profile";
import ContaInfos from "../conta";
import Operacoes from "../operacoes";
import Cartoes from "../cartoes";

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Profile />
            <ContaInfos />
            <Operacoes />
            <Cartoes/>
        </View>
    )
}
