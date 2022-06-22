import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../../styles'

const Funcao = ({ funcao, username, navigation }) => {
  return (
    <TouchableOpacity style={styles.funcaoButton} onPress={() => navigation.navigate('AppPagInicial', {username, funcao})}>
      <Text style={styles.textCadastro}>{funcao}</Text>
    </TouchableOpacity>
  );
};
const CadFuncao = ({ route, navigation }) => {
  const username = route.params;
  return (
    <SafeAreaView style={styles.funcaoContainer}>
      <View style={styles.container}>
        <Text>{username}</Text>
        <View style={styles.funcaoParent}>
          <Funcao funcao={'Paciente'} username={username} navigation={navigation} />
          <Funcao funcao={'Acompanhante'} username={username} navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CadFuncao;