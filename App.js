import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, TextInput, SafeAreaView } from 'react-native';

// TELAS
const PaginaInicial = ({ navigation }) => {
    return (
       	<View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')} />
        <Button
	  onPress={() => navigation.navigate('CadastroUm')}
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
const CadastroUm = ({ navigation }) => {
	return(
		<View style={ styles.container }>
			<Text style={ styles.textCadastro }>Email</Text>
			<TextInput
				style={ styles.inputCadastro }
				placeholder='Digite seu email'/>
		
			<Text style={ styles.textCadastro }>Senha</Text>
			<TextInput
				style={ styles.inputCadastro }
				placeholder='Digite sua senha'/>
			<Button 
			  title='Entrar'
			  color='#1b4'
			/>
			<Button 
			 title='Cadastrar-se'
			color='#1b4'
      onPress={()=> navigation.navigate('CadFuncao')}
			/>	
		</View>
	);
}
const QuemSomosNos = () => {
  const [titleText, setTitleText] = useState("Quem somos");
  const bodyText = "Somos apenas estudantes com o nobre sonho de criar um mundo melhor. Um dia tive meu dedo quebrado em um acidente domestico, enquanto estava sendo atendido escutei um paciente contando que nao tinha ninguém para acompanha-lo caso algo grave acontecesse com ele, aquilo tocou meu coração e despertou um anseio de ajuda-lo, porém nada pude fazer, o sentimento angustiante só aumentou quando cheguei em casa e conversei com meu pai, um mediador de cuidadores de idosos a mais de 10 anos e minha mãe uma técnica de enfermagem à 22 anos, com toda sua experiência me disseram que isso é extremamente comum, diversas pessoas perdem exames mais intrusivos, até mesmos cirurgias pela falta de acompanhantes, e dessa vontade de fazer o mundo melhor surgiu minha ideia, e com a ajuda de um grande amigo eric e outros ajudantes o anseio de ajudar o proximo tomou forma e virou um projeto de tcc, uma apresentação de power point e agora um aplicativo";

  const onPressTitle = () => {
    setTitleText("Quem somos S2");
  };

  return (
	<View style={ styles.container }>
    <Text style={styles.textCadastro}>
      <Text style={styles.textTitulo} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
	  </View>
  );
};
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



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name='PaginaInicial' component={ PaginaInicial } options={{ title: 'Hospital Companion' }} />
	      <Stack.Screen name='CadastroUm' component={ CadastroUm } options={{ title: 'Cadastro' }}/>
	      <Stack.Screen name='QuemSomosNos' component={ QuemSomosNos } options={{ title: 'Quem Somos Nós' }} />
	      <Stack.Screen name='CadFuncao' component={ CadFuncao } options={{ title: 'Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dfe',
      alignItems: 'center',
     	justifyContent: 'center',
    },
    image: {
     	width: 500,
      height: 500,
      resizeMode: 'stretch',
    },
    textCadastro: {
      marginTop: '1%',
      marginBottom: '1%',
      fontWeight: 'bold',
      alignText: 'left',
    },
    inputCadastro: {
    	marginTop: '1%',
      marginBottom: '1%',
      borderWidth: 1,
      padding: 10,
      alignText: 'center',
    },
    textTitulo: {
    	fontWeight: 'bold',
	fontSize: 40,
      color: '#1aa',
    },
    textLink: {
      color: '#888',
    },
    funcaoContainer: {
      flex: 1,
    },
    funcaoParent: {
      flex: 1,
      flexDirection: "row",
      marginTop: '5%',
      justifyContent: "space-around",
    },
    funcaoButton: {
      backgroundColor: "#ddd",
      padding: 18,
      borderWidth: 5,
      alignItems: 'center',
      padding: 10,
      width: "80%",
      height: 50,
    },
  })
