import { FlatList, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../../styles";
import { firebase } from "../../firebaseConnection";


const Acompanhamentos = () => {
    const [userData, setUserData] = useState('');
    const [acompanhantes, setAcompanhantes] = useState('');
    if (firebase.app.length && userData == '') {
        const userRef = firebase.auth().currentUser;
        // Listar todos os Ids no objet acompanhamento
        firebase
            .firestore()
            .collection("users")
            .doc(userRef.uid)
            .get()
            .then(documentSnapshot => {
                const userData = documentSnapshot.data();
                setUserData(userData);
                setAcompanhantes(userData['acompanhantes']);
            });
    }
    return <View style={styles.container}>
        <FlatList
            data={acompanhantes}
            renderItem={({ item }) => {
                return <View style={[{ borderColor: "grey" }, { borderWidth: 4 }, { borderStyle: "solid" }, { margin: 5 }, { padding: 5 }]}>
                    <View>
                        <Text style={[styles.textTitulo, {fontSize: 30}, {textAlign: "center"}]}>Hospital AMI</Text>
                        <Text style={styles.textTitulo}>Data: 27/02/2023</Text>
                    </View>
                    <View style={styles.caixaRecomCabecalho}>
                        <View style={styles.feedHeaderInfo}>
                            <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                            <Text>Nome: {item.nome}</Text>
                            <Text>Idade: 20</Text>
                        </View>
                        <View style={[styles.messageSend, { width: 90 }, { height: 50 }, { borderBottomWidth: 5 }, { borderTopWidth: 5 }]}>
                            <TextInput placeholder="Diga algo..." style={[{ backgroundColor: "lightgrey" }, { height: "100%" }]} />
                        </View>
                        <TouchableOpacity style={[styles.recButton]}><Text style={styles.textTitulo}>></Text></TouchableOpacity>
                    </View>
                </View>;
            }}
        />
    </View>;
}
export default Acompanhamentos;