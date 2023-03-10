import { useNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import loginStyle from './style';
export default function Login() {

    const [cpf, setCpf] = useState('');
    const [pass, setPass] = useState('');

    const handlePress = () => {
        const user = {
            cpf: cpf,
            pass: pass,
        };

        fetch('http://192.168.0.102:9595/createaccount/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {

                console.log(response.status)
                if (response.status === 201) {
                    navigation.navigate('MainScreen');
                } else {
                    Alert.alert('Erro', 'Não foi possível criar o usuário.');
                }
            })
            .catch(error => {
                console.error(error);
                Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
            });
    };
    return (
        <View style={loginStyle.container}>
            <TextInput
                style={loginStyle.textInput}
                placeholder="CPF"
                value={cpf}
                onChangeText={text => setCpf(text)}
            />
            <TextInput style={loginStyle.textInput} placeholder='PASSWORD' value={pass} onChangeText={text => setPass} />

            <TouchableOpacity style={loginStyle.button} onPress={handlePress}>
                <Text style={loginStyle.buttontext}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>

    )
}
