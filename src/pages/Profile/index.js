import { View, Text, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import pfpstyles from "./style";
export default function Profile() {

    return (
        <View style={pfpstyles.mainView}>
            <TouchableOpacity >
                <Entypo name="eye" size={24} color="white" style={pfpstyles.eyeStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={pfpstyles.pfpCircle}>
                <View />
            </TouchableOpacity>
            <TouchableOpacity style={pfpstyles.support}>
                <FontAwesome5 name="question-circle" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={pfpstyles.mailbox}>
                <MaterialCommunityIcons name="email-plus-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text style={pfpstyles.pfpAccountName}>Olá, Miguer</Text>
        </View>
    )
}
