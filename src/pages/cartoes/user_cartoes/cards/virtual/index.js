import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styleVirtual from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Virtualcard({ navigation }) {
  const [cardnumber, setCardNumber] = useState(null);
  const [ccv, setCCV] = useState(null);
  const [fullname, setfullName] = useState(null);
  const [expdata, setexpdata] = useState(null);
  const formatexpData = moment(expdata).format("MM / YY");
  const [nick, setNick] = useState(null);
  const [typecard, setTypecard] = useState(null);

  const Apiurl = "http://192.168.0.102:8000/";
  const secondary_navigation = useNavigation();
  const Confgicard = () => {
    secondary_navigation.navigate("ConfigCardFisic");
  };
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = await getToken();
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
        const response = await axios.get(`${Apiurl}me/`, config);
        const full_name = response.data.full_name;
        const get_nick = response.data.nick;
        setfullName(full_name);
        setNick(get_nick);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchFisicCardInfos = async () => {
      try {
        const token = await getToken();

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(`${Apiurl}get_card_infos`, config);
        const expdata_response = response.data.exp_data;
        const cvv_response = response.data.cvv;
        const card_number_response = response.data.card;
        console.log(response.data);
        setCCV(cvv_response);
        setexpdata(expdata_response);
        setCardNumber(card_number_response);

        if (response.data.type_card === "gl") {
          setTypecard("Gold");
        } else if (response.data.type_card === "pt") {
          setTypecard("Platinum");
        } else {
          setTypecard("Diamond");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFisicCardInfos();
  }, []);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(cardnumber);
  };
  return (
    <ScrollView style={styleVirtual.container}>
      <View style={styleVirtual.main}>
        <View style={styleVirtual.drawcircle}>
          <MaterialCommunityIcons
            name="credit-card-chip-outline"
            style={styleVirtual.cardicon}
            size={50}
            color="black"
          />
        </View>
        <Text style={styleVirtual.usrnamevcHeader}>{nick}</Text>
        <View style={styleVirtual.viewbox}>
          <Text style={styleVirtual.textHeader}>Nome</Text>
          <Text style={styleVirtual.textContent}>{fullname}</Text>
        </View>
        <View style={styleVirtual.viewbox}>
          <Text style={styleVirtual.textHeader}>Número</Text>
          <Text style={styleVirtual.textContent}>{cardnumber}</Text>
          <TouchableOpacity
            onPress={() => copyToClipboard()}
            style={styleVirtual.clickCopy}
          >
            <Feather name="copy" size={30} color="purple" />
            <Text style={styleVirtual.copy}>Copiar</Text>
          </TouchableOpacity>
        </View>
        <View style={styleVirtual.viewbox}>
          <Text style={styleVirtual.textHeader}>Validade</Text>
          <Text style={styleVirtual.textContent}>{formatexpData}</Text>
          <Text style={styleVirtual.textHeaderleft}>CCV</Text>
          <Text style={styleVirtual.textContentleft}>{ccv}</Text>
        </View>
        <View style={styleVirtual.viewbox}>
          <Text style={styleVirtual.textHeader}>Mastercard</Text>
          <Text style={styleVirtual.textContent}>{typecard}</Text>
          <Text style={styleVirtual.textHeaderleft}>Função</Text>
          <Text style={styleVirtual.textContentleft}>Débito e crédito</Text>
        </View>
        <View>
          <View style={styleVirtual.circle}>
            <Feather
              name="lock"
              style={styleVirtual.icons}
              size={29}
              color="black"
            />
            <Text style={styleVirtual.circleText}>Bloquear</Text>
          </View>
          <TouchableOpacity style={styleVirtual.click} onPress={Confgicard}>
            <View style={styleVirtual.circle2}>
              <Ionicons
                name="settings-outline"
                style={styleVirtual.icons}
                size={30}
                color="black"
              />
              <Text style={styleVirtual.circleText}>Configurar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
