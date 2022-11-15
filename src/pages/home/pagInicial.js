import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles';


const PaginaInicial = ({ navigation }) => {
  // const [convidadoTolken, setConvidadoTolken] = useState('');
  const convidadoTolken = "qweQj4giRJSdMNzB8g1XIa6t3YtRIHPH";
    return (
        <View style={styles.container}>
          <Image
          style={styles.image}
          source={require('../../../assets/logo.png')} />
          <TouchableOpacity 
            style={[styles.agendarButton, {marginBottom: 20}]}
            onPress={()=> navigation.navigate('Entrar')}
            >
            <Text style={{color: 'white', fontWeight: 'bold'}} >Entrar</Text>
          </TouchableOpacity>
          <Text 
            style={styles.textLink}
            onPress={() => {
              navigation.navigate('CadFuncao', {uid: convidadoTolken, nome: "Convidado"});
              // navigation.navigate('Contrato', {uid: convidadoTolken, nome: "Convidado"});
            }} 
            >Entrar como convidado</Text>
          <StatusBar style="auto" />
        </View>
        );
}

export default PaginaInicial;
