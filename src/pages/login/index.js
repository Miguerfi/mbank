import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import loginStyle from "./style";

export default function Login({ navigation }) {
  const secondary = useNavigation();

  const createAccounthandlePress = () => {
    secondary.navigate("UserForm");
  };

  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");

  const handlePress = () => {
    const user = {
      cpf: cpf,
      password: pass,
    };

    fetch("http://192.168.0.102:9595/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
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
        style={loginStyle.textInput}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={loginStyle.textInput}
        placeholder="PASSWORD"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <TouchableOpacity onPress={createAccounthandlePress}>
        <Text style={loginStyle.createText}>Não tem uma Conta? crie uma.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyle.button} onPress={handlePress}>
        <Text style={loginStyle.buttontext}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
