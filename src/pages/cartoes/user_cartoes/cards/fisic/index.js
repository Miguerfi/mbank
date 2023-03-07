import React, { useCallback, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, SafeAreaView } from "react-native";
import fscard from './style'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";


export default function Fisiccard({ navigation }) {

    const [refreshing, setRefreshing] = useState(false);
    const ccdefault = require('../../../../../../img/mainbasev2.png')
    const onRefresh = useCallback(() => {
        setRefreshing(true);


        setRefreshing(false);
    }, []);
    return (

        <View style={fscard.main}>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={fscard.refresh} />}
            >
                <AntDesign style={fscard.closebutton} name="close" size={30} color="black" />
                <View style={fscard.drawcc}>

                    <LinearGradient
                        colors={['#ae40f5', '#830ad1']}
                        style={{ flex: 1, borderRadius: 10 }}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                    </LinearGradient>

                    <Image style={fscard.basecard} source={ccdefault} />
                    <Text style={fscard.namecc}>Jose M A Silva</Text>
                </View>
                <View >
                    <View style={fscard.circle}>
                        <Feather name="lock" style={fscard.icons} size={29} color="black" />
                        <Text style={fscard.circleText}>Bloquear</Text>
                    </View>
                    <View style={fscard.circle2}>
                        <Ionicons name="settings-outline" style={fscard.icons} size={30} color="black" />
                        <Text style={fscard.circleText}>Configurar</Text>
                    </View>
                </View>
                <View style={fscard.infocard}>
                    <Text style={fscard.infocardHeaderText}>Para compras online,use seu cartão virtual</Text>
                    <Text style={fscard.infoboxText}>Por segurança use seu cartão físico somente para compras presenciais,Para compras online,assinaturas em sites e aplicativos, você pode criar cartões virtuais.</Text>
                    <View>
                        <TouchableOpacity>
                            <Text style={fscard.clickText}>Ver os cartões virtuais </Text>
                            <AntDesign style={fscard.arrowright} name="arrowright" size={22} color="purple" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={fscard.usrcchead}>
                        Nome
                    </Text>
                    <Text style={fscard.usrccinfo}>Jose M A Silva</Text>
                </View>
                <View>
                    <Text style={fscard.usrcchead}>
                        Validade
                    </Text>
                    <Text style={fscard.usrccinfo}>12 / 30</Text>
                </View>
                <View style={fscard.sizebox}>
                    <Text style={fscard.usrcchead}>Mastercard</Text>
                    <Text style={fscard.usrcctype}>Gold</Text>
                    <Text style={fscard.usrfunchead}>Função</Text>
                    <Text style={fscard.usrfuncinfo}>Débito e crédito</Text>
                </View>
            </ScrollView>

        </View>
    )
}
