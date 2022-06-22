import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles';


const PaginaInicial = ({ navigation }) => {
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
            onPress={() => navigation.navigate('CadFuncao', 'Convidado')} 
            >Entrar como convidado</Text>
          <StatusBar style="auto" />
        </View>
        );
}

export default PaginaInicial;
