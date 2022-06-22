import { Button, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';

const Entrar = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [senha,  setSenha] = useState('');
	const [username, setUsername] = useState('');
	const onEntrarPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((response) => {
				const uid = response.user.uid
				const userRef = firebase.firestore().collection('users')
				userRef
					.doc(uid)
					.get()
					.then(firestoreDocument => {
						if(!firestoreDocument.exists){
							alert("User does not exits.");
							return;
						}
						const user = firestoreDocument.data();
						let username = user['nome'];
						let funcao = "Funcao";
						navigation.navigate('AppPagInicial', { username, funcao });
					})
					.catch(error => {
						console.log(error);
						alert(error);
					});
			})
			.catch(error => {
				alert(error);
			});
	};
	return(
		<View style={ styles.container }>
			<Text style={ styles.textCadastro }>Email</Text>
			<TextInput
				style={ styles.inputCadastro }
				placeholder='Digite seu email'
				onChangeText={ (text) => setEmail(text) }
				value = { email }/>
			<Text style={ styles.textCadastro }>Senha</Text>
			<TextInput
				style={ styles.inputCadastro }
				placeholder='Digite sua senha'
				onChangeText = { (text) => setSenha(text) }
				value = { senha }
				secureTextEntry={true}/>
			<Button 
				title='Entrar'
				color='#1b4'
				onPress={ onEntrarPress }
			/>
			<Button 
				title='Cadastrar-se'
				color='#1b4'
				onPress={ () => navigation.navigate('CadastroUm') }
			/>	
		</View>
	);
}
export default Entrar;
