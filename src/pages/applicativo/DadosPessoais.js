import { firebase } from "../../firebaseConnection";
import styles from "../../styles";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Touchable, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MaskInput from "react-native-mask-input";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const DadosPessoais = () => {
    const [userData, setUserData] = useState('');
    const [isEditing, setEditing] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "Masculino", value: "masculino" },
        { label: "Feminino", value: "feminino" },
        { label: "Outros", value: "outros" }
    ]);


    const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
    const DataNascimanto_Mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];

    console.log(userData);
    // GET USER DATA
    if (firebase.app.length && userData == '') {
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

    const editarDados = (dados) => {
        const userRef = firebase.auth().currentUser;
        firebase.firestore().collection("users").doc(userRef.uid).update(dados).catch((e) => { console.log(e) });
    }
    const excluirConta = (conta) => {
        const userRef = firebase.auth().currentUser;
        firebase.firestore().collection("users").doc(userRef.uid).delete().then(() => {
            userRef.delete().then(() => {
                Alert.alert("Conta deletada", "conta deletada com sucesso.");
            }).catch((e) => {
                console.log(e);
            })
        });
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={[styles.container, { marginLeft: 15 }, { marginRight: 15 }]}>
                <ScrollView>
                    {!isEditing ?
                        <View style={styles.dadosPessoais}>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <View style={styles.dadosButtons}>
                                    <TouchableOpacity
                                        style={styles.agendarButton}
                                        onPress={() => setEditing(true)}>
                                        <Text style={[{ color: "white" }, { fontWeight: "bold" }]}>Editar dados</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.agendarButton, { backgroundColor: "red" }]}
                                        onPress={() => {
                                            excluirConta(userData);
                                        }}>
                                        <Text style={[{ color: "white" }, { fontWeight: "bold" }]}>Excluir Conta</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Principais</Text>
                                <Text style={styles.textCadastro}>Nome: </Text>
                                <Text style={styles.textName}>{userData['nome']}</Text>
                                <Text style={styles.textCadastro}>Função: </Text>
                                <Text style={styles.textName}>{userData['funcao']}</Text>
                                <Text style={styles.textCadastro}>Email: </Text>
                                <Text style={styles.textName}>{userData['email']}</Text>
                                <Text style={styles.textCadastro}>Gênero: </Text>
                                <Text style={styles.textName}>{userData['genero']}</Text>
                            </View>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Pessoais</Text>
                                <Text style={styles.textCadastro}>Data de Nascimento: </Text>
                                <Text style={styles.textName}>{userData['dataNascimento']}</Text>
                                <Text style={styles.textCadastro}>Endereço: </Text>
                                <Text style={styles.textName}>{userData['endereco']}</Text>

                            </View>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Secretos</Text>
                                <Text style={styles.textCadastro}>ID: </Text>
                                <Text style={styles.textName}>{userData['id']}</Text>
                                <Text style={styles.textCadastro}>CPF: </Text>
                                <Text style={styles.textName}>{userData['cpf']}</Text>
                                <Text style={styles.textCadastro}>Senha: </Text>
                                <Text style={styles.textName}>-------------</Text>
                            </View>
                        </View>
                        :
                        <View style={styles.dadosPessoais}>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <View style={styles.dadosButtons}>
                                    <TouchableOpacity
                                        style={styles.agendarButton}
                                        onPress={() => {
                                            setEditing(false);
                                            editarDados(userData);
                                            console.log(userData);
                                        }}>
                                        <Text style={[{ color: "white" }, { fontWeight: "bold" }]}>Salvar</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Principais</Text>
                                <Text style={styles.textCadastro}>Nome: </Text>
                                <TextInput style={styles.inputCadastro}
                                    value={userData['nome']}
                                    onChangeText={(text) => setUserData(
                                        {
                                            "nome": text,
                                            "genero": userData['genero'],
                                            "cpf": userData['cpf'],
                                            "endereco": userData['endereco'],
                                            "id": userData['id'],
                                            "dataNascimento": userData['dataNascimento'],
                                            "email": userData['email'],
                                            "funcao": userData['funcao']
                                        }
                                    )}></TextInput>
                                <Text style={styles.textCadastro}>Função: </Text>
                                <Text style={styles.textName}>{userData['funcao']}</Text>
                                <Text style={styles.textCadastro}>Email: </Text>
                                <Text style={styles.textName}>{userData['email']}</Text>
                                <Text style={styles.textCadastro}>Gênero: </Text>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    // onChangeValue={setUserData(
                                    //     {
                                    //         "nome": userData['nome'],
                                    //         "genero": value,
                                    //         "cpf": userData['cpf'],
                                    //         "endereco": userData['endereco'],
                                    //         "id": userData['id'],
                                    //         "dataNascimento": userData['dataNascimento'],
                                    //         "email": userData['email'],
                                    //         "funcao": userData['funcao']
                                    //     }
                                    // )}
                                    onChangeValue={(value) => {
                                        setUserData(
                                            {
                                                "nome": userData['nome'],
                                                "genero": value,
                                                "cpf": userData['cpf'],
                                                "endereco": userData['endereco'],
                                                "id": userData['id'],
                                                "dataNascimento": userData['dataNascimento'],
                                                "email": userData['email'],
                                                "funcao": userData['funcao']
                                            });
                                        console.log(value);
                                    }
                                    }
                                    setItems={setItems}
                                />
                            </View>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Pessoais</Text>
                                <Text style={styles.textCadastro}>Data de Nascimento: </Text>
                                <MaskInput
                                    value={userData['dataNascimento']}
                                    onChangeText={(masked, unmasked) => setUserData(
                                        {
                                            "nome": userData['nome'],
                                            "genero": userData['genero'],
                                            "cpf": userData['cpf'],
                                            "endereco": userData['endereco'],
                                            "id": userData['id'],
                                            "dataNascimento": masked,
                                            "email": userData['email'],
                                            "funcao": userData['funcao']
                                        }
                                    )}
                                    mask={DataNascimanto_Mask}
                                />
                                <Text style={styles.textCadastro}>Endereço: </Text>
                                <TextInput style={styles.inputCadastro}
                                    value={userData['endereco']}
                                    onChangeText={(text) => setUserData(
                                        {
                                            "nome": userData['nome'],
                                            "genero": userData['genero'],
                                            "cpf": userData['cpf'],
                                            "endereco": text,
                                            "id": userData['id'],
                                            "dataNascimento": userData['dataNascimento'],
                                            "email": userData['email'],
                                            "funcao": userData['funcao']
                                        }
                                    )}></TextInput>

                            </View>
                            <View style={[{ borderStyle: "solid" }, { borderBottomWidth: 2 }, { borderColor: "#CCC" }, { padding: 5 }]}>
                                <Text style={[styles.textTitulo, { fontSize: 30 }]}>Dados Secretos</Text>
                                <Text style={styles.textCadastro}>ID: </Text>
                                <Text style={styles.textName}>{userData['id']}</Text>
                                <Text style={styles.textCadastro}>CPF: </Text>
                                <MaskInput
                                    value={userData['cpf']}
                                    onChangeText={(masked, unmasked) => setUserData(
                                        {
                                            "nome": userData['nome'],
                                            "genero": userData['genero'],
                                            "cpf": masked,
                                            "endereco": userData['endereco'],
                                            "id": userData['id'],
                                            "dataNascimento": userData['dataNascimento'],
                                            "email": userData['email'],
                                            "funcao": userData['funcao']
                                        }
                                    )}
                                    mask={CPF_MASK}
                                />
                                <Text style={styles.textCadastro}>Senha: </Text>
                                <Text style={styles.textName}>-------------</Text>
                            </View>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
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