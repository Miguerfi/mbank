import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import transactionInfo from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SucessModal({ visible, closeSucessModal }) {
  const [transactionAmount, setTransactionAmount] = useState(null);
  const [transactionAuthor, setTransactionAuthor] = useState(null);
  const [transactionID, setTransactionID] = useState(null);
  const [transactionMessage, setTransactionMessage] = useState(null);

  const getTransactionInfos = () => {
    try {
      AsyncStorage.getItem("transactionInfos").then((data) => {
        if (data) {
          const {
            transaction_amount: savedTransaction_amount,
            transaction_author: savedTransaction_author,
            transaction_id: savedTransactionID,
            transaction_message: savedTransactionMessage,
          } = JSON.parse(data);
          setTransactionAmount(savedTransaction_amount);
          setTransactionAuthor(savedTransaction_author);
          setTransactionID(savedTransactionID);
          setTransactionMessage(savedTransactionMessage);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  getTransactionInfos();

  return (
    <Modal style={transactionInfo.container} visible={visible}>
      <TouchableOpacity onPress={closeSucessModal}>
        <Ionicons
          style={transactionInfo.closebutton}
          name="close-sharp"
          size={35}
        />
      </TouchableOpacity>
      <Text style={transactionInfo.textHeader}>Informações da transação</Text>
      <View style={transactionInfo.boxContainer}>
        <Text style={transactionInfo.textBoxHeader}>Total</Text>
        <Text style={transactionInfo.textBoxInfos}>R$ {transactionAmount}</Text>
        <Text style={transactionInfo.textBoxHeader}>Autor</Text>
        <Text style={transactionInfo.textBoxInfos}>{transactionAuthor}</Text>
        <Text style={transactionInfo.textBoxHeader}>ID</Text>
        <Text style={transactionInfo.textBoxInfos}>{transactionID}</Text>
        <Text style={transactionInfo.textBoxHeader}>Message</Text>
        <Text style={transactionInfo.textBoxInfos}>{transactionMessage}</Text>
      </View>
    </Modal>
  );
}
