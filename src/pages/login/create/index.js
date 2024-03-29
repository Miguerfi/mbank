import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, TextInput, Alert, TouchableOpacity, Text } from "react-native";
import createaccountStyle from "./style";

export default function UserForm({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [nick, setNick] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    const user = {
      full_name: fullName,
      cpf: cpf,
      nick: nick,
      birthdate: birthdate,
      password: password,
      email: email,
    };

    fetch("http://192.168.0.102:8000/createaccount/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          response.json().then(data => AsyncStorage.setItem("token",data.token))
          navigation.navigate("Login");
        } else {
          console.log(response.data)
          Alert.alert("Erro", "Não foi possível criar o usuário.");
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      });
  };
  return (
    <View style={createaccountStyle.container}>
      <TextInput
        placeholder="Nome completo"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        style={createaccountStyle.textBox}
      />
      <TextInput
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        style={createaccountStyle.textBox}
      />
      <TextInput
        placeholder="Apelido"
        value={nick}
        onChangeText={(text) => setNick(text)}
        style={createaccountStyle.textBox}
      />
      <TextInput
        placeholder="Data de nascimento"
        value={birthdate}
        onChangeText={(text) => setBirthdate(text)}
        style={createaccountStyle.textBox}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={createaccountStyle.textBox}
      />
      <TextInput placeholder="Senha"
      value={password}
        secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      style={createaccountStyle.textBox}/>
      <View>
        <TouchableOpacity
          style={createaccountStyle.button}
          title="Cadastrar"
          onPress={handlePress}
        >
          <Text style={createaccountStyle.text}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
