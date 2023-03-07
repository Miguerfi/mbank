import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import pgtStyle from "./style";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export default function Pagamento({ navigation }) {
    return (
        <View>
            <AntDesign style={pgtStyle.closebutton} name="close" size={30} color="black" />
            <Text style={pgtStyle.textHeader}>Estas são suas opções de pagamento</Text>

            <TouchableOpacity>
                <View>
                    <Entypo style={pgtStyle.stRight} name="chevron-right" size={24} color="black" />
                    <MaterialCommunityIcons style={pgtStyle.QRCODE} name="qrcode-scan" size={30} color="black" />
                    <Text style={pgtStyle.headerQRCODE}>
                        Pagar com Pix com QR Code
                    </Text>
                    <View style={pgtStyle.newView}><Text style={pgtStyle.newText}>Novo</Text></View>
                    <Text style={pgtStyle.mainQRCODE}>
                        <Text>
                            Leia o QRCode ou copie e
                            cole o código e pague com
                            o saldo da conta ou
                        </Text>
                        <TouchableOpacity >
                            <Text style={pgtStyle.ccc}>cartão
                                de crédito</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Entypo style={pgtStyle.stRightpc} name="chevron-right" size={24} color="black" />
                    <MaterialCommunityIcons style={pgtStyle.paycreditcard} name="credit-card-refresh-outline" size={30} color="black" />
                    <Text style={pgtStyle.headerQRCODE}>
                        Pagar fatura do cartão
                    </Text>
                    <Text style={pgtStyle.mainQRCODE}>
                        <Text>
                            Gere um boleto ou pague com seu saldo
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Entypo style={pgtStyle.stRightpc} name="chevron-right" size={24} color="black" />
                    <Ionicons style={pgtStyle.paycreditcard} name="md-barcode-outline" size={30} color="black" />
                    <Text style={pgtStyle.headerQRCODE}>
                        Pagar boleto
                    </Text>
                    <Text style={pgtStyle.mainQRCODE}>
                        <Text>
                            Use o saldo da conta ou cartão de crédito
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Entypo style={pgtStyle.stRightpc} name="chevron-right" size={24} color="black" />
                    <MaterialCommunityIcons style={pgtStyle.paycreditcard} name="text-box-search-outline" size={30} color="black" />
                    <Text style={pgtStyle.headerQRCODE}>
                        Buscador de boletos
                    </Text>
                    <Text style={pgtStyle.mainQRCODE}>
                        <Text>
                            A gente traz seus boletos bancários já digitalizados para você.
                        </Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
