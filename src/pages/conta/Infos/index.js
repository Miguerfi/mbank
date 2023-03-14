import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import infoStyle from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import ListHorizontal from "../../../components/ListHorizontalInfos";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, RefreshControl } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Infos({ navigation }) {
  const [accountBalance, setaccountBalance] = useState(null);
  const [moneySaved, setmoneySaved] = useState(null);
  const [moneyApplied, setmoneyApplied] = useState(null);

  const Apiurl = "http://192.168.0.102:8000/";

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  };

  const trazer_salario = require("../../../../img/bringpayment.png");
  const extrato = require("../../../../img/extrato.png");
  const cobrar = require("../../../../img/money-talk.png");
  const deposito = require("../../../../img/deposito.png");
  const transferir = require("../../../../img/1182952-200.png");

  const [refreshing, setRefreshing] = useState(false);

  const data = [
    {
      id: 1,
      title: "Trazer Seu Salario",
      icon: <Image source={trazer_salario} style={infoStyle.trazer_salario} />,
    },
    {
      id: 2,
      title: "Pagar",
      icon: <Ionicons name="barcode" size={44} color="black" />,
    },
    {
      id: 3,
      title: "Transferir",
      icon: <Image source={transferir} style={infoStyle.transferir} />,
    },
    {
      id: 4,
      title: "Investir",
      icon: <MaterialCommunityIcons name="signal" size={30} color="black" />,
    },
    {
      id: 5,
      title: "Pedir Extrato",
      icon: <Image source={extrato} style={infoStyle.extrato} />,
    },
    {
      id: 6,
      title: "Cobrar",
      icon: <Image source={cobrar} style={infoStyle.cobrar} />,
    },
    {
      id: 7,
      title: "Depositar",
      icon: <Image source={deposito} style={infoStyle.deposito} />,
    },
  ];

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const token = await getToken();

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(`${Apiurl}saldo`, config);

        const saldo = response.data.saldo;
        const dinheiroGuardado = response.data.dinheiro_guardado;
        const dinheiroAplicado = response.data.dinheiro_aplicado;
        setaccountBalance(saldo);
        setmoneySaved(dinheiroGuardado);
        setmoneyApplied(dinheiroAplicado);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSaldo();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    const fetchSaldo = async () => {
      try {
        const token = await getToken();

        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get(`${Apiurl}saldo`, config);

        const saldo = response.data.saldo;
        setaccountBalance(saldo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSaldo();

    setRefreshing(false);
  }, []);
  return (
    <View style={infoStyle.header}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={infoStyle.textInfo}>Saldo disponível</Text>
        <Text style={infoStyle.saldoInfo}>R$ {accountBalance}</Text>
        <TouchableOpacity style={infoStyle.guardadoInfo}>
          <Text style={infoStyle.dinheiroGInfo}>Dinheiro Guardado</Text>
          <Text style={infoStyle.dinheiroInfo}>R$ {moneySaved}</Text>
          <MaterialCommunityIcons
            style={infoStyle.piggy}
            name="piggy-bank-outline"
            size={35}
            color="black"
          />
          <Entypo
            name="chevron-right"
            style={infoStyle.setaRight}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={infoStyle.rendimentoContainer}>
          <Text style={infoStyle.rendimentoTotal}>
            Rendimento total da conta
          </Text>
          <Text style={infoStyle.rendimentoimes}>
            <Text style={infoStyle.rendimento}>+R$ {moneyApplied}</Text>
            <Text style={infoStyle.mes}> este mês</Text>
          </Text>
          <FontAwesome5
            name="signal"
            style={infoStyle.rede}
            size={22}
            color="black"
          />
          <Entypo
            name="chevron-right"
            style={infoStyle.setaRight}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <View>
          <ListHorizontal data={data} />
        </View>
        <View style={infoStyle.histHeader}>
          <Text style={infoStyle.histMaintext}>Histórico</Text>
          <TextInput style={infoStyle.histtextInput} placeholder="Buscar" />
          <View>
            <TouchableOpacity style={infoStyle.searchhistButton}>
              <Ionicons
                style={infoStyle.searchhistButtonItem}
                name="md-search-sharp"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
