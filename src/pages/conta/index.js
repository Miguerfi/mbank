import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
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

  const accountBalace = "800,25";

  const [hidevalue, sethideValue] = useState(accountBalace);
  const hiddenvalue = "●●●●";

  return (
    <View>
      <View style={accstyles.container}>
        <View style={accstyles.mainView}>
          <View style={accstyles.iconsbox}>
            <TouchableOpacity
              onPress={() => {
                sethideValue(
                  hidevalue === hiddenvalue ? accountBalace : hiddenvalue
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
              <Image style={accstyles.pfpImage} source={{ uri: selectedpfp }} />
            )}
          </TouchableOpacity>
          <Text style={accstyles.pfpAccountName}>Olá, Miguer</Text>
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
    </View>
  );
}
