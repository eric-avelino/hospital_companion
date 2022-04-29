import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, Text, View, Image, TextInput } from 'react-native';

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
const CadastroUm = () => {
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
			/>	
		</View>
	);
}
const QuemSomosNos = () => {
  const [titleText, setTitleText] = useState("Quem somos");
  const bodyText = "Somos apenas estudantes com o nobre sonho de criar um mundo melhor. Um dia tive meu dedo quebrado em um acidente domestico, enquanto estava sendo atendido escutei um paciente contando que nao tinha ninguém para acompanhalo caso algo grave acontecesse com ele, aquilo tocou meu coração e despertouu am anseio de ajudalo, porém nada pude fazer, o sentimento angustiante só aumentou quando cheguei em casa e conversei com meu pai, um mediador de cuidadores de idosos a mais de 10 anos e minha mae uma tecnica de enfermagem a 22 anos, com toda sua experencia me dissera que isso é extremamente comum, diversas pessoas perdem exaames mais intrusivos, até mesmos cirurgias pela falta de acompanhante, e dessa vontade de fazer o mundo melhor surgiu minha ideia, e com a ajuda de um grande amigo eric e outros ajudantes o anseio de ajudar o proximo tomou forma e virou um projeto de tcc, uma apresentação de power point e agora um aplicativo";

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



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name='PaginaInicial' component={ PaginaInicial } />
	<Stack.Screen name='CadastroUm' component={ CadastroUm } />
	<Stack.Screen name='QuemSomosNos' component={ QuemSomosNos } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    container: {
      	flex: 1,
      	backgroundColor: '#5da',
      	alignItems: 'center',
     	justifyContent: 'center',
    },
    image: {
     	width: 500,
      	height: 500,
      	resizeMode: 'stretch',
    },
    textCadastro: {
	color: '#000',
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
	fontColor: '#000',
    },
    textLink: {
      color: '#888',
    },
  })
