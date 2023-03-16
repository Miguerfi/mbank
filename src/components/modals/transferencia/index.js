import { View, Modal, TouchableOpacity, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import transFfocus from "./style";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native-gesture-handler";

export default function TypeTransferencia({ closeModalSecondary, visible }) {
  const [value, setValue] = useState(null);
  const [targetUser, setTargetUser] = useState(null);
  const [amountSend, setAmountSend] = useState(null);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  };

  async function getValuetoSend(key) {
    try {
      const getValue = await AsyncStorage.getItem(key);
      if (getValue !== null) {
        console.log(getValue);
        const formatValue = getValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        setAmountSend(getValue);
        setValue(formatValue);
      }
    } catch (error) {
      console.log("erro ao recuperar key");
    }
  }
  getValuetoSend("value");

  async function handlePress() {
    const send_infos = {
      target_user: targetUser,
      amount_send: amountSend,
    };
    const token = await getToken();
    fetch("http://192.168.0.102:8000/transaction_send/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send_infos),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("OK");
        } else {
          Alert.alert("Erro,não foi possivel fazer a transação");
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      });
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={transFfocus.mainContainer}>
        <TouchableOpacity onPress={closeModalSecondary}>
          <Ionicons style={transFfocus.closebutton} name="close" size={30} />
        </TouchableOpacity>

        <Text style={transFfocus.textHeader}>
          Para quem você quer transferir{" "}
          <Text style={transFfocus.textMoney}>R$ {value}</Text>
        </Text>
        <Text style={transFfocus.textInfo}>
          Encontre um contato na sua lista de contatos ou inicie uma nova
          transferência
        </Text>
        <TextInput
          style={transFfocus.textInput}
          placeholder="CPF, EMAIL ou NOME"
          underlineColorAndroid={"grey"}
          onChangeText={(text) => setTargetUser(text)}
        ></TextInput>
        <TouchableOpacity style={transFfocus.sendButton} onPress={handlePress}>
          <Ionicons
            name="chevron-forward"
            style={transFfocus.buttonIco}
            color="white"
            size={35}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
