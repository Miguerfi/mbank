import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";
import paymentStyle from "./style";

export default function PaymentAssistent() {
  const reloadICO = require('../../../img/reloadmoney.png')
  return (
    <View style={paymentStyle.container}>
      <Text style={paymentStyle.textHeader}>Acompanhe também</Text>
      <View style={paymentStyle.secondaryContainer}>
        <TouchableOpacity style={paymentStyle.clickAREA}>
          <Image source={reloadICO} style={paymentStyle.reloadmoney}/>
          <Text style={paymentStyle.textInfo}>Assistente de Pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
