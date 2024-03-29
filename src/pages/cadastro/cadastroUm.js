import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles";
import React, { useState } from "react";
import { firebase } from "../../firebaseConnection";

const CadastroUm = ( { navigation } ) => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	const onCadastrarPress = () => {
		if(firebase.app.length){
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, senha)
				.then((response) => {
					const uid = response.user.uid
					const data = {
						id: uid,
						email,
						nome,
						funcao: 'x',
						cpf: 'x',
						endereco: 'x',
						dataNascimento: 'x',
						genero: 'x',
					};
					const userRef = firebase.firestore().collection('users');
					// alert("UID: " + uid + "\nDATA: \n\rID:" + data.id + "\n\rEMAIL: " + data.email + "\n\rNOME: " + data.nome);
					userRef
						.doc(uid)
						.set(data)
						.then(() => {
							// alert("DONE");
							navigation.navigate('CadFuncao', {uid, nome});
						})
						.catch((error) => {
							alert(error);
						});
				})
				.catch((error) => {
					alert(error);
				});
		}
	}
    return(
        <View style={ styles.container }>
			<Text
				style={ styles.textCadastro }>Nome</Text>
			<TextInput
			style={ styles.inputCadastro }
			placeholder='Digite seu nome.'
			onChangeText={ (text) => setNome(text)}
			value = { nome }></TextInput>
			<Text
				style={ styles.textCadastro }>Email</Text>
			<TextInput
			style={ styles.inputCadastro }
			placeholder='Digite seu email.'
			onChangeText={ (text) => setEmail(text)}
			value = { email }></TextInput>
			<Text
				style={ styles.textCadastro }>Senha</Text>
	    	<TextInput
			secureTextEntry={true}
	    	style={ styles.inputCadastro }
	    	placeholder='Digite sua senha.'
			onChangeText={(text) => setSenha(text)}
			value = { senha }></TextInput>

			<TouchableOpacity
				style={styles.agendarButton}
				onPress={ onCadastrarPress }>
				<Text style={[{color: "white"}, {fontWeight: "bold"}]}>Cadastrar-se</Text>
			</TouchableOpacity>
        </View>
    );
};
export default CadastroUm;
