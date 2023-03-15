import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import fscard from "./style";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export default function Fisiccard({ navigation }) {
  const ccdefault = require("../../../../../../img/mainbasev2.png");
  const [fullname, setfullName] = useState(null);
  const [expdata, setexpdata] = useState(null);
  const formatexpData = moment(expdata).format("MM / YY");

  const [typecard, setTypecard] = useState(null);
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
  const secondary_navigation = useNavigation();
  const Confgicard = () => {
    secondary_navigation.navigate("ConfigCardFisic");
  };

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
        setexpdata(expdata_response);

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
        const full_name = response.data.full_name;
        setfullName(full_name);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <View style={fscard.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={fscard.drawcc}>
          <LinearGradient
            colors={["#ae40f5", "#830ad1"]}
            style={{ flex: 1, borderRadius: 10 }}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
          ></LinearGradient>
          <Image style={fscard.basecard} source={ccdefault} />
          <Text style={fscard.namecc}>{fullname}</Text>
        </View>
        <View>
          <View style={fscard.circle}>
            <Feather name="lock" style={fscard.icons} size={29} color="black" />
            <Text style={fscard.circleText}>Bloquear</Text>
          </View>
          <TouchableOpacity style={fscard.click} onPress={Confgicard}>
            <View style={fscard.circle2}>
              <Ionicons
                name="settings-outline"
                style={fscard.icons}
                size={30}
                color="black"
              />
              <Text style={fscard.circleText}>Configurar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={fscard.infocard}>
          <Text style={fscard.infocardHeaderText}>
            Para compras online,use seu cartão virtual
          </Text>
          <Text style={fscard.infoboxText}>
            Por segurança use seu cartão físico somente para compras
            presenciais,Para compras online,assinaturas em sites e aplicativos,
            você pode criar cartões virtuais.
          </Text>
          <View>
            <TouchableOpacity>
              <Text style={fscard.clickText}>Ver os cartões virtuais </Text>
              <AntDesign
                style={fscard.arrowright}
                name="arrowright"
                size={22}
                color="purple"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={fscard.usrcchead}>Nome</Text>
          <Text style={fscard.usrccinfo}>{fullname}</Text>
        </View>
        <View>
          <Text style={fscard.usrcchead}>Validade</Text>
          <Text style={fscard.usrccinfo}>{formatexpData}</Text>
        </View>
        <View style={fscard.sizebox}>
          <Text style={fscard.usrcchead}>Mastercard</Text>
          <Text style={fscard.usrcctype}>{typecard}</Text>
          <Text style={fscard.usrfunchead}>Função</Text>
          <Text style={fscard.usrfuncinfo}>Débito e crédito</Text>
        </View>
      </ScrollView>
    </View>
  );
}
