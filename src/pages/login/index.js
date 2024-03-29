import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import loginStyle from "./style";
import Checkbox from "expo-checkbox";

export default function Login({ navigation }) {
  const secondary = useNavigation();

  const createAccounthandlePress = () => {
    secondary.navigate("UserForm");
  };

  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("loginData").then((data) => {
      if (data) {
        const { cpf: savedCpf, password: savedPassword } = JSON.parse(data);
        setCpf(savedCpf);
        setPass(savedPassword);
        setRememberMe(true);
        secondary.navigate("Main")
      }
    });
  }, []);
  const handlePress = () => {
    const user = {
      cpf: cpf,
      password: pass,
    };

    fetch("http://192.168.0.102:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          if (rememberMe) {
            AsyncStorage.setItem("loginData", JSON.stringify(user));
          }
          navigation.navigate("Main");
        } else {
          Alert.alert("Erro", "Não foi possível fazer Login");
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      });
  };

  return (
    <View style={loginStyle.container}>
      <TextInput
        keyboardType="numeric"
        style={loginStyle.textInput}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={loginStyle.textInput}
        placeholder="PASSWORD"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <View style={loginStyle.rememberMeContainer}>
        <Checkbox
          color={"#830ad1"}
          value={rememberMe}
          onValueChange={setRememberMe}
        />
        <Text style={loginStyle.rememberMeText}>Remeber me?</Text>
      </View>
      <TouchableOpacity onPress={createAccounthandlePress}>
        <Text style={loginStyle.createText}>Não tem uma Conta? crie uma.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyle.button} onPress={handlePress}>
        <Text style={loginStyle.buttontext}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
