import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import ListHorizontalDiscoverMore from "../../components/ListHorizontalDiscoverMore";
import style from "../../components/ListHorizontalDiscoverMore/style";
import discoverStyle from "./style";

export default function LifeInsurance() {
  const image1 = require("../../../img/seguro_vida.webp");
  const image2 = require("../../../img/afriend.webp");
  const image3 = require("../../../img/salario.webp");
  const image4 = require("../../../img/whatsapp.webp");
  const image5 = require("../../../img/tosons.webp");
  const image6 = require("../../../img/sede-nubank-capa.jpg");
  data = [
    {
      id: 1,
      info: "Seguro de vida",
      text: "Cuide de quem você ama de um jeito simples que cabe n..",
      img: <Image source={image1} style={discoverStyle.images} />,
      button: "Conhecer",
    },
    {
      id: 2,
      info: "Indique o Nu para amigos",
      text: "Espalhe como é simples estar no controle.",
      img: <Image source={image2} style={discoverStyle.images} />,
      button: "Indicar amigos",
    },
    {
      id: 3,
      info: "Portabilidade de salário",
      text: "Liberdade é escolher onde receber seu dinheiro.",
      img: <Image source={image3} style={discoverStyle.images} />,
      button: "Conhecer",
    },
    {
      id: 4,
      info: "Whatsapp",
      text: "Pagamentos seguros, rápidos e sem tarifa. A experiência ...",
      img: <Image source={image4} style={discoverStyle.images} />,
      button: "Quero conhecer",
    },
    {
      id: 5,
      info: "Conta para seus filhos",
      text: "Agora seus filhos com a idade entre 12 e 17 podem ter ...",
      img: <Image source={image5} style={discoverStyle.images} />,
      button: "Conhecer",
    },
    {
      id: 6,
      info: "Termos de uso",
      text: "Explicamos o que diz documento do Nubank.",
      img: <Image source={image6} style={discoverStyle.images} />,
      button: "Conhecer",
    },
  ];
  return (
    <View>
      <Text style={discoverStyle.containerText}>Descubra mais</Text>
      <ListHorizontalDiscoverMore data={data} />
    </View>
  );
}
