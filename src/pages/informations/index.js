import ListHorizontalAnouncements from "../../components/ListHorizontalAnouncements";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Anouncements({}) {
  const data = [
    {
      id: 1,
      destaque: "Semana do Consumidor",
      info: " com até 50% de cashback. Vem!",
    },
    {
      id: 2,
      info: "Concorra a prêmios com o Nubank Vida a partir de R$4/...",
    },
    {
      id: 3,
      destaque: "Convide amigos para o Nubank",
      info: " e desbloqueie brasões incríveis.",
    },
  ];
  return (
    <View>
      <ListHorizontalAnouncements data={data} />
    </View>
  );
}
