import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
import Transferencias from "../../pages/transferencia";
import Pagamento from "../../pages/conta/Pagamento";

export default function ListHorizontalInfos({ data }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const handlePress = (item) => {
    switch (item.title) {
      case "Trazer Seu Salario":
        setSelectedModal("salario");
        break;
      case "Pagar":
        setSelectedModal("pagamento");
        break;
      case "Transferir":
        setSelectedModal("transferir");
        break;
      case "Investir":
        setSelectedModal("investimento");
        break;
      case "Pedir Extrato":
        setSelectedModal("extrato");
        break;
      case "Cobrar":
        setSelectedModal("cobranca");
        break;
      case "Depositar":
        setSelectedModal("deposito");
        break;
      default:
        break;
    }
    openModal();
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderModal = () => {
    switch (selectedModal) {
      case "salario":
        return <SalarioModal closeModal={closeModal} />;
      case "pagamento":
        return <Pagamento closeModal={closeModal} />;
      case "transferir":
        return <Transferencias closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <View>
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
      {modalVisible && renderModal()}
    </View>
  );
}
