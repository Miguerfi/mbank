import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import transF from "./style";
import TypeTransferencia from "../../components/modals/transferencia";
export default function Transferencias({ closeModal }) {
  const [ownerCard, setOwnerCard] = useState(null);

  const [saldoEnvio, setSaldoEnvio] = useState(0);

  const [modalSecondaryVisible, setModalSecondaryVisible] = useState(false);
  const Apiurl = "http://192.168.0.102:8000/";

  const openTypeTransferencia = () => {
    setModalSecondaryVisible(true);
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCardInfos = async () => {
      try {
        const token = await getToken();

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
        const response = await axios.get(`${Apiurl}saldo`, config);
        const owner_response_value = response.data.saldo;
        setOwnerCard(owner_response_value);
      } catch (error) {
        console.log(error);
      }
    };
    getCardInfos();
  }, []);

  const checkValueTransferencia = () => {
    if (parseInt(saldoEnvio) > ownerCard) {
      Alert.alert("Saldo Insuficiente")
    } else {
      openTypeTransferencia();
    }
  };

  return (
    <Modal visible={true} animationType="fade">
      <View>
        <TouchableOpacity style={transF.closebutton} onPress={closeModal}>
          <Ionicons name="close-outline" size={30} />
        </TouchableOpacity>
        <Text style={transF.headerText}>Qual é o valor da transferência?</Text>
        <Text style={transF.valueText}>
          Saldo disponivel em conta R$ {ownerCard}
        </Text>
        <View style={transF.viewValue}>
          <Text style={transF.moneyType}>R$</Text>
          <TextInput
            style={transF.valuechange}
            placeholder="0,00"
            onChangeText={(value) => setSaldoEnvio(value)}
            keyboardType="numeric"
          />
        </View>
        <View style={transF.drawline} />
        <TouchableOpacity
          onPress={checkValueTransferencia}
          style={transF.right}
        >
          <Feather
            name="arrow-right"
            style={transF.rightIcon}
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {modalSecondaryVisible && (
        <TypeTransferencia closeModalSecondary={closeModal} />
      )}
    </Modal>
  );
}
