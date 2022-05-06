import { StatusBar } from 'expo-status-bar';
import {  Button,Text, View, Image, } from 'react-native';
import React from 'react';
import styles from '../../styles'


const PaginaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Image
          style={styles.image}
          source={require('../../../assets/logo.png')} />
          <Button
          onPress={() => navigation.navigate('Entrar')}
          title='Entrar'
          color='#1b4'
          />
          <Text 
            style={styles.textLink}
            onPress={() => navigation.navigate('QuemSomosNos')} 
            >Entrar como convidado</Text>
          <StatusBar style="auto" />
        </View>
        );
}

export default PaginaInicial;
