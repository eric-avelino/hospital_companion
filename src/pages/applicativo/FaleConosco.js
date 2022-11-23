import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';


const FaleConosco = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [menssagem, setMenssagem] = useState('');

    const onContatePress = () => {

    }

    return <View style={styles.container}>
        <Text style={styles.textTitulo}>Fale Conosco</Text>
        <View>
            <Text
                style={styles.textCadastro}>Nome</Text>
            <TextInput
                style={styles.inputCadastro}
                placeholder='Digite seu nome.'
                value={nome}></TextInput>
            <Text
                style={styles.textCadastro}>Email</Text>
            <TextInput
                style={styles.inputCadastro}
                placeholder='Digite seu email.'
                value={email}></TextInput>
            <Text
                style={styles.textCadastro}>Assunto</Text>
            <TextInput
                style={styles.inputCadastro}
                placeholder='Digite o assunto.'
                value={assunto}></TextInput>
            <Text
                style={styles.textCadastro}>Menssagem</Text>
            <TextInput
                style={[styles.inputCadastro, {height: 100}, {}]}
                multiline={true}
                placeholder='Digite sua menssagem.'
                value={menssagem}></TextInput>
        </View>
        <View>
            <TouchableOpacity
                style={styles.agendarButton}
                onPress={onContatePress}>
                <Text style={[{ color: "white" }, { fontWeight: "bold" }]}>Contate-nos</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default FaleConosco;