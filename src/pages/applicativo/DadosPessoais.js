import { firebase } from "../../firebaseConnection";
import styles from "../../styles";
import React, { useState } from "react";
import { View, Text } from "react-native";

const DadosPessoais = () => {
    const [userData, setUserData ] = useState('');
    console.log(userData);
    // GET USER DATA
    if(firebase.app.length && userData == ''){
        const userRef = firebase.auth().currentUser;
        firebase
            .firestore()
            .collection("users")
            .doc(userRef.uid)
            .get()
            .then(documentSnapshot => {
                const userData = documentSnapshot.data();
                setUserData(userData);
            });
    }
    // USER DATA END


    return(
        <View style={styles.container}>
            <View style={styles.dadosPessoais}>
            {/* key={"mainData"}
            key={"personalData"}
            key={"hiddenData"} */}
                <View  style={[{borderStyle: "solid"}, {borderBottomWidth: 2}, {borderColor: "#CCC"}, {padding: 5}]}>
                    <Text style={styles.textTitulo}>Dados Principais</Text>
                    <Text style={styles.textCadastro}>Nome: </Text>
                    <Text style={styles.textName}>{userData['nome']}</Text>
                    <Text style={styles.textCadastro}>Função: </Text>
                    <Text style={styles.textName}>{userData['funcao']}</Text>
                    <Text style={styles.textCadastro}>Email: </Text>
                    <Text style={styles.textName}>{userData['email']}</Text>
                    <Text style={styles.textCadastro}>Gênero: </Text>
                    <Text style={styles.textName}>{userData['genero']}</Text>
                </View>
                <View  style={[{borderStyle: "solid"}, {borderBottomWidth: 2}, {borderColor: "#CCC"}, {padding: 5}]}>
                    <Text style={styles.textTitulo}>Dados Pessoais</Text>
                    <Text style={styles.textCadastro}>Data de Nascimento: </Text>
                    <Text style={styles.textName}>{userData['dataNascimento']}</Text>
                    <Text style={styles.textCadastro}>Endereço: </Text>
                    <Text style={styles.textName}>{userData['endereco']}</Text>
                    
                </View>
                <View  style={[{borderStyle: "solid"}, {borderBottomWidth: 2}, {borderColor: "#CCC"}, {padding: 5}]}>
                    <Text style={styles.textTitulo}>Dados Secretos</Text>
                    <Text style={styles.textCadastro}>ID: </Text>
                    <Text style={styles.textName}>{userData['id']}</Text>
                    <Text style={styles.textCadastro}>CPF: </Text>
                    <Text style={styles.textName}>{userData['cpf']}</Text>
                    <Text style={styles.textCadastro}>Senha: </Text>
                    <Text style={styles.textName}>-------------</Text>
                </View>
            </View>
            {/* { Object.keys(userData).sort().map(key => {
                    return( <View key={key} style={styles.dadosPessoais}>
                        <Text style={styles.textCadastro}>{key}: </Text>
                        <Text style={styles.textName}>{userData[key]}</Text>
                        </View>);
                    }) } */}
        </View>
    );
}

export default DadosPessoais;