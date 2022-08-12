import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
// import InputMask from "react-input-mask";
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';
import MaskInput from "react-native-mask-input";

// const CPFInputMask = (props) => {
//     return(
//         <InputMask
//             mask="999.999.999-99"
//             onChange={props.onChange}
//             value={props.value}>
//             {() => <TextInput style={styles.inputCadastro}/>}
//         </InputMask>
//     );
// }
// const DataNascimentoInputMask = (props) => {
//     return(
//     <InputMask
//         mask="99/99/9999"
//         onChange={props.onChange}
//         value={props.value}>
//         {() => <TextInput style={styles.inputCadastro} />}
//     </InputMask>
//     );
// }

const CadastroDois = ( { navigation, route } ) => {
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
    const DataNascimanto_Mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

    const params = route.params;
    const uid = params.uid;
    const username = params.username;

    const onProximoPress = () => {
        if(firebase.app.length){
            const userRef = firebase.auth().currentUser
            
            userRef.updateProfile({cpf: cpf, endereco: endereco}).then(() => {
                firebase
                    .firestore()
                    .collection('users')
                    .doc(userRef.uid)
                    .set({
                        cpf: cpf,
                        endereco: endereco,
                        dataNascimento: dataNascimento
                    },
                    { merge: true });
                firebase.firestore().collection('users').doc(userRef.uid).get().then(documentSnapshot=>{ 
                    console.log(documentSnapshot.data()["funcao"]) 
                    if(documentSnapshot.data()["funcao"] == "Paciente"){
                        navigation.navigate("AppPagInicialPa", {uid, username});
                    }else{
                        navigation.navigate("AppPagInicialAc", {uid, username});
                    }
                })
            }
            );
        }
    }
    return(
    <View style={ styles.container }>
    <Text
        style={ styles.textCadastro }>CPF</Text>
        <MaskInput
            value={cpf}
            onChangeText={(masked, unmasked) => setCpf(masked)}
            mask={CPF_MASK}
        />
        {/* <CPFInputMask
            value={cpf}
            onChange={({ target: { value } }) => setCpf(value)}></CPFInputMask> */}
    <Text
        style={ styles.textCadastro }>Endereço</Text>
        <TextInput
        style={ styles.inputCadastro }
        placeholder='Digite seu endereço.'
        onChangeText={ (text) => setEndereco(text)}
        value = { endereco }></TextInput>
    <Text
        style={ styles.textCadastro }>Data de Nascimento</Text>
        <MaskInput
            value={dataNascimento}
            onChangeText={(masked, unmasked) => setDataNascimento(masked)}
            mask={DataNascimanto_Mask}
        />
        {/* <DataNascimentoInputMask
            value={dataNascimento}
            onChange={({ target: { value } }) => setDataNascimento(value)}>
        </DataNascimentoInputMask> */}
        {/* <Button
	    	title='Próximo'
	    	color='#1b4'
			onPress={ onProximoPress }/> */}
        <TouchableOpacity
            style={styles.agendarButton}
            onPress={ onProximoPress }>
            <Text style={[{color: "white"}, {fontWeight: "bold"}]}>Próximo</Text>
        </TouchableOpacity>
    </View>
    );
}
export default CadastroDois;