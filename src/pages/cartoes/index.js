import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import cartoeStyle from "./style";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Cartoes() {
  const navigation = useNavigation();

  const [created, setCreated] = useState(false);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  const handlePress = () => {
    navigation.navigate("Usercards");
  };
  const Apiurl = "http://192.168.0.102:8000/";

  useEffect(() => {
    AsyncStorage.getItem("created").then((value) => {
      if (value === "true") {
        setCreated(true);
      }
    });
  }, []);

  async function createCard() {
    const token = await getToken();
    fetch(`${Apiurl}create_card/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({}),
    }).then((response) => {
      if (response.status === 201) {
        AsyncStorage.setItem("created", "true").then(() => {
          setCreated(true);
        });
      }
    });
  }

  return (
    <View style={cartoeStyle.main}>
      {created ? (
        <TouchableOpacity onPress={handlePress}>
          <MaterialCommunityIcons
            style={cartoeStyle.phone}
            name="cards-outline"
            size={30}
            color="black"
          />
          <Text style={cartoeStyle.Text}>Meus cartões</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={createCard}>
          <FontAwesome
            style={cartoeStyle.phone}
            name="plus-square-o"
            size={30}
            color="black"
          />
          <Text style={cartoeStyle.Text}>Criar Cartão</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
