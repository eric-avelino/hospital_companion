import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../../styles'

const Funcao = ({ funcao }) => {
    return (
      <TouchableOpacity style={styles.funcaoButton}>
        <Text style={styles.textCadastro}>{funcao}</Text>
      </TouchableOpacity>
    );
  };
const CadFuncao = () => {
  return (
    <SafeAreaView style={ styles.funcaoContainer }>
      <View style={ styles.container}>
        <View style={ styles.funcaoParent }>
          <Funcao funcao={'Paciente'} />
          <Funcao funcao={'Acompanhante'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

  export default CadFuncao;