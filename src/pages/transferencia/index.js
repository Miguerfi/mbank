import React, { useEffect, useState } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import transF from "./style";
import TypeTransferencia from "../../components/modals/transferencia";
import CurrencyInput from "react-native-currency-input";
export default function Transferencias({ closeModal, visible }) {
  const [ownerCard, setOwnerCard] = useState(null);

  const [saldoEnvio, setSaldoEnvio] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const Apiurl = "http://192.168.0.102:8000/";

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
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
      Alert.alert("Saldo Insuficiente");
    } else {
      handleOpenModal();
      handleSalvarValor();
    }
  };
  const saveValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`Valor salvo com sucesso: ${value}`);
    } catch (e) {
      console.log(`Erro ao salvar valor: ${e}`);
    }
  };
  const handleSalvarValor = () => {
    saveValue("value", JSON.stringify(saldoEnvio));
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
          <CurrencyInput
            value={saldoEnvio}
            style={transF.valuechange}
            placeholder="0,00"
            separator=","
            precision={2}
            onChangeValue={(value) => setSaldoEnvio(value)}
          />
        </View>
        <View style={transF.drawline} />
        <View>
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
          <TypeTransferencia
            visible={modalVisible}
            closeModalSecondary={handleCloseModal}
          />
        </View>
      </View>
    </Modal>
  );
}
