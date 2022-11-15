import { FlatList, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles";
import { firebase } from "../../firebaseConnection";


const Acompanhamentos = ({ navigation }) => {
    const [userData, setUserData] = useState('');
    const [links, setLinks] = useState('');
    const [deleted, setDeleted] = useState('');

    useEffect(()=> {
        if (firebase.app.length && userData == '') {
            const userRef = firebase.auth().currentUser;
            console.log("Trying to fetch links info")
            // Listar todos os Ids no objet acompanhamento
            firebase
                .firestore()
                .collection("users")
                .doc(userRef.uid)
                .get()
                .then(documentSnapshot => {
                    const userData = documentSnapshot.data();
                    setUserData(userData);
                    const links = userData['links'];
                    const linksArray = [];
                    console.log(links);
                    links.forEach(link => {
                        firebase
                            .firestore()
                            .collection("links")
                            .doc(link["linkId"])
                            .get()
                            .then((documentSnapshot => {
                                console.log(documentSnapshot.data());
                                linksArray.push(documentSnapshot.data());
                            }));
                    });
                    setLinks(linksArray);
                });
        }
    }, []);
    const excluirAcompanhante = (acomp) => {
        // if (deleted != "" && deleted == acomp["nome"]) {
        //     // delete
        //     if (firebase.app.length && userData != '') {
        //         const userRef = firebase.auth().currentUser;
        //         // Listar todos os Ids no objet acompanhamento
        //         firebase
        //             .firestore()
        //             .collection("users")
        //             .doc(userRef.uid)
        //             .get()
        //             .then(documentSnapshot => {
        //                 const userData = documentSnapshot.data();
        //                 const newAc = Array.prototype.filter.call(acompanhantes, (item) => (item["nome"] != acomp["nome"]));
        //                 firebase
        //                     .firestore()
        //                     .collection("users")
        //                     .doc(userRef.uid)
        //                     .update({
        //                         acompanhantes: newAc
        //                     })
        //                     .catch((e) => {
        //                         alert(e);
        //                     }).then( () => {
        //                         alert("Acompanhante removido");
        //                         navigation.navigate("Acompanhamentos");
        //                     });
        //                 console.log(newAc);
        //             });
        //     }
        //     console.log("Excluding " + acomp["nome"]);
        // }
        // else {
        //     setDeleted(acomp["nome"]);
        //     console.log("Changed exclusion");
        // }
        // console.log(acomp["nome"], "\nDeleted value: ", deleted);
        // console.log(acompanhantes);
        alert("Deseja excluir " + acomp["nome"] + "?");
    }
    return <View style={styles.container}>
        <FlatList
            data={links}
            renderItem={({ item }) => {
                return <View style={[{ borderColor: "grey" }, { borderWidth: 4 }, { borderStyle: "solid" }, { margin: 5 }, { padding: 5 }]}>
                    <View>
                        <Text style={[styles.textTitulo, { fontSize: 30 }, { textAlign: "center" }]}>Hospital AMI</Text>
                        <TouchableOpacity style={[styles.recButton]} onPress={() => excluirAcompanhante(item)}><Text style={[styles.textTitulo, deleted == item["nome"] ? { color: "orange" } : { color: "red" }, { fontSize: 30 }]}>X</Text></TouchableOpacity>
                        <Text style={styles.textTitulo}>Data: 27/02/2023</Text>
                    </View>
                    <View style={styles.caixaRecomCabecalho}>
                        <View style={styles.feedHeaderInfo}>
                            <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                            <Text>Nome: {userData["funcao"] == "Acompanhante" ? item.nome_p : item.nome_v}</Text>
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