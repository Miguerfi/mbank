import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  RefreshControl,
} from "react-native";
import accstyles from "./style";
import Infos from "./Infos";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
export default function ContaInfos() {
  const navigation = useNavigation();
  const [selectedpfp, setSelectedpfp] = useState(null);

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Desculpe, precisamos de permissão para acessar a câmera!");
      }
    })();
  }, []);

  const pickPfp = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedpfp(result.assets[0].uri);
      try {
        await AsyncStorage.setItem("selectedpfpUri", result.assets[0].uri);
      } catch (e) {
        console.log("Erro while trying save usr pfp image");
      }
    }
  };

  useEffect(() => {
    const getSavedpfpUri = async () => {
      try {
        const uri = await AsyncStorage.getItem("selectedpfpUri");
        if (uri !== null) {
          setSelectedpfp(uri);
        }
      } catch (e) {
        console.log("error getting image URI from AsyncStorage:", e);
      }
    };
    getSavedpfpUri();
  }, []);
  const handlePress = () => {
    navigation.navigate("a");
  };

  const [accountBalance, setaccountBalance] = useState(null);
  const hiddenvalue = "●●●●";
  const [hidevalue, sethideValue] = useState(hiddenvalue);

  const [nick, setNick] = useState(null);

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
        console.log(response.data.nick);
        const user = response.data.nick;
        setNick(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

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
        setaccountBalance(saldo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSaldo();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

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

    const getUser = async () => {
      try {
        const token = await getToken();
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };
        const response = await axios.get(`${Apiurl}me/`, config);
        console.log(response.data.nick);
        const user = response.data.nick;
        setNick(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    sethideValue(hidevalue === accountBalance);
    console.log("Refreshed");
    setRefreshing(false);
  }, []);
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={accstyles.container}>
          <View style={accstyles.mainView}>
            <View style={accstyles.iconsbox}>
              <TouchableOpacity
                onPress={() => {
                  sethideValue(
                    hidevalue === accountBalance ? hiddenvalue : accountBalance
                  );
                }}
                style={accstyles.clickicons}
              >
                <Entypo name="eye" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={accstyles.clickicons}>
                <FontAwesome5 name="question-circle" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={accstyles.clickicons}>
                <MaterialCommunityIcons
                  name="email-plus-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={pickPfp} style={accstyles.pfpCircle}>
              {selectedpfp && (
                <Image
                  style={accstyles.pfpImage}
                  source={{ uri: selectedpfp }}
                />
              )}
            </TouchableOpacity>
            <Text style={accstyles.pfpAccountName}>Olá, {nick}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePress} style={accstyles.conta}>
          <Text style={accstyles.contaText}>Conta</Text>
          <Entypo
            style={accstyles.contaRight}
            name="chevron-right"
            size={30}
            color="black"
          />
          <Text style={accstyles.contaDinheiro}>R$ {hidevalue}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
