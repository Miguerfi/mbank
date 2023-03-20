import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import usrcards from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Usercards({ navigation }) {
  const [ccnumberFisic, setccnumberFisic] = useState(0);
  const [cvvFisic, setcvvFisic] = useState(0);
  const [expdataFisic, setexpdataFisic] = useState(0);

  const ccNumberFisicString = ccnumberFisic.toString();

  const numberTrunced = ccNumberFisicString.replace(/(.{4})/g, "$1 ");

  const [ownerCard, setOwnerCard] = useState(null);
  const [nick, setNick] = useState(null);
  const Apiurl = "http://192.168.0.102:8000/";

  const navigation_secondary = useNavigation();
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  const Fisiccard = () => {
    navigation_secondary.navigate("Fisiccard");
  };
  const Virtualcard = () => {
    navigation_secondary.navigate("Virtualcard");
  };
  useEffect(() => {
    const getMe = async () => {
      try {
        const token = await getToken();

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(`${Apiurl}me`, config);
        const user_full_name = response.data.full_name;
        const nick_name = response.data.nick;
        setNick(nick_name)
        setOwnerCard(user_full_name);
      } catch (error) {
        console.log(error);
      }
    };
    getMe();
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

        const ccnumberF = response.data.card;
        const ccvvFisisc = response.data.cvv;
        const expdataFisic = response.data.exp_data;
        setccnumberFisic(ccnumberF);
        setcvvFisic(ccvvFisisc);
        setexpdataFisic(expdataFisic);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFisicCardInfos();
  }, []);
  return (
    <View style={usrcards.main}>
      <Text style={usrcards.headerText}>Meus cartões</Text>
      <Text style={usrcards.headerTypecard}>Cartão físico</Text>
      <TouchableOpacity onPress={Fisiccard} style={usrcards.card}>
        <View style={usrcards.cardView}>
          <Text style={usrcards.cardTextname}>{ownerCard}</Text>
          <Text
            style={usrcards.ccnumber}
            numberOfLines={1}
            ellipsizeMode="head"
          >
            ●●● {numberTrunced.substring(0, 4)}
          </Text>
          <MaterialCommunityIcons
            style={usrcards.ccicon}
            name="credit-card-chip-outline"
            size={30}
            color="black"
          />
          <Entypo
            style={usrcards.setaRight}
            name="chevron-right"
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <Text style={usrcards.headerTypecardV}>Cartão virutal</Text>
      <TouchableOpacity onPress={Virtualcard} style={usrcards.card}>
        <View style={usrcards.cardView}>
          <Text style={usrcards.cardTextname}>{nick}</Text>
          <Text
            style={usrcards.ccnumber}
            numberOfLines={1}
            ellipsizeMode="head"
          >
            ●●●
          </Text>

          <MaterialCommunityIcons
            style={usrcards.ccicon}
            name="credit-card-chip-outline"
            size={30}
            color="purple"
          />
          <Entypo
            style={usrcards.setaRight}
            name="chevron-right"
            size={24}
            color="purple"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={usrcards.card}>
        <Entypo
          style={usrcards.plusicon}
          name="plus"
          size={24}
          color="purple"
        />
        <Text style={usrcards.createccV}>Criar cartão virtual</Text>
      </TouchableOpacity>
    </View>
  );
}
