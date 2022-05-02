import { Button, Text, View, TextInput } from 'react-native';
import React from 'react';
import styles from '../../styles'

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
export default CadastroUm;