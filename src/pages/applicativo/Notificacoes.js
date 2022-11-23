import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { firebase } from "../../firebaseConnection";

const Notificacoes = () => {
    const [notifications, setNotifications] = useState("pendente");
    const [userData, setUserData] = useState('');
    const [pacData, setPacData] = useState('');
    const [volData, setVolData] = useState('');

    // Render all pendent conexions
    if (firebase.app.length && notifications == "pendente") {
        const userRef = firebase.auth().currentUser;
        // Listar todos os Ids no object acompanhamento
        firebase
            .firestore()
            .collection("users")
            .doc(userRef.uid)
            .get()
            .then(documentSnapshot => {
                setUserData(documentSnapshot.data());
                console.log("User data: ", userData);
            });
        firebase
            .firestore()
            .collection("notifications")
            .doc(userRef.uid)
            .get()
            .then(documentSnapshot => {
                const notificationsSnapshot = documentSnapshot.data();
                setNotifications(notificationsSnapshot["notifications"]);
                console.log("Notifications: ", notificationsSnapshot["notifications"]);
            });
    }
    const aceitarLink = (link) => {
        let selfName = userData['funcao'] == "Acompanhante" ? link['nome_v'] : link['nome_p'];
        let otherName = userData['funcao'] == "Acompanhante" ? link['nome_p'] : link['nome_v'];
        console.log("Link data: ", link);
        console.log("Aceitando " + link["nome_p"]);
        setVolData({
            uid: link["uid_v"],
            nome: link["nome_v"]
        });
        setPacData({
            uid: link["uid_p"],
            nome: link["nome_p"]
        });
        if (firebase.app.length && volData != '' && pacData != '') {
            const userRef = firebase.auth().currentUser;
            firebase
                .firestore()
                .collection("links")
                .add({
                    uid_p: pacData["uid"],
                    nome_p: pacData["nome"],
                    uid_v: volData["uid"],
                    nome_v: volData["nome"]
                })
                .then((docRef) => {
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(volData['uid'])
                        .set({
                            links: firebase.firestore.FieldValue.arrayUnion({ linkId: docRef.id })
                        }, { merge: true })
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(pacData['uid'])
                        .set({
                            links: firebase.firestore.FieldValue.arrayUnion({ linkId: docRef.id })
                        }, { merge: true })
                })
                .then(() => {
                    setVolData('');
                    setPacData('');
                })
                .catch((e) => {
                    alert(e);
                }).then(alert("Acompanhante adicionado"));
            firebase
                .firestore()
                .collection('notifications')
                .doc(userRef.uid)
                .get()
                .then(documentSnapshot => {
                    let notSnapshot = documentSnapshot.data()['notifications'];
                    console.log("---------------------------------------", "\nNOTIFICATIONS SNAPSHOT: ", notSnapshot);
                    // [{"action": "link", "nome_p": "Eric Avelino ", "nome_v": "Mengão",
                    // "uid_p": "wlb72S16w9dBHr4mDnlZvnydWjm1", "uid_v": "JkaJsIHh98b0610ZXGiDy8q0e0N2"},
                    // {"action": "link", "nome_p": "valeria helena", "nome_v": "Mengão", "uid_p": "NHOTlJkYRyQ8Ub4BEkmlduVUDvv1",
                    // "uid_v": "JkaJsIHh98b0610ZXGiDy8q0e0N2"}]
                    // const newNotArray = notSnapshot.map(not => userData['funcao'] == "Acompanhante" ? not['nome_p'] != otherName && (not) : not['nome_v'] != otherName && (not));
                    const newNotArray = notSnapshot.filter(not => userData["funcao"] == "Acompanhante" ? not['nome_p'] != otherName : not['nome_v'] != otherName);
                    console.log("NEW NOT ARRAY: ", newNotArray);
                    firebase
                        .firestore()
                        .collection('notifications')
                        .doc(userRef.uid)
                        .set(
                            {notifications: newNotArray}
                        ).catch((e) => {
                            alert(e);
                        });
                });
        }
    }
    const recusarLink = (link) => {
        let selfName = userData['funcao'] == "Acompanhante" ? link['nome_v'] : link['nome_p'];
        let otherName = userData['funcao'] == "Acompanhante" ? link['nome_p'] : link['nome_v'];
        console.log("Link data: ", link);
        console.log("Recusando " + link["nome_p"]);
        if (firebase.app.length) {
            const userRef = firebase.auth().currentUser;
            firebase
                .firestore()
                .collection('notifications')
                .doc(userRef.uid)
                .get()
                .then(documentSnapshot => {
                    let notSnapshot = documentSnapshot.data()['notifications'];
                    console.log("---------------------------------------", "\nNOTIFICATIONS SNAPSHOT: ", notSnapshot);
                    // [{"action": "link", "nome_p": "Eric Avelino ", "nome_v": "Mengão",
                    // "uid_p": "wlb72S16w9dBHr4mDnlZvnydWjm1", "uid_v": "JkaJsIHh98b0610ZXGiDy8q0e0N2"},
                    // {"action": "link", "nome_p": "valeria helena", "nome_v": "Mengão", "uid_p": "NHOTlJkYRyQ8Ub4BEkmlduVUDvv1",
                    // "uid_v": "JkaJsIHh98b0610ZXGiDy8q0e0N2"}]
                    // const newNotArray = notSnapshot.map(not => userData['funcao'] == "Acompanhante" ? not['nome_p'] != otherName && (not) : not['nome_v'] != otherName && (not));
                    const newNotArray = notSnapshot.filter(not => userData["funcao"] == "Acompanhante" ? not['nome_p'] != otherName : not['nome_v'] != otherName);
                    console.log("NEW NOT ARRAY: ", newNotArray);
                    firebase
                        .firestore()
                        .collection('notifications')
                        .doc(userRef.uid)
                        .set(
                            {notifications: newNotArray}
                        ).catch((e) => {
                            alert(e);
                        });
                });
        }
    }
    return (
        <View style={styles.container}>
            <FlatList
                // data={[
                //     { key: 'Acompanhante1' },
                //     { key: 'Acompanhante2' },
                //     { key: 'Acompanhante3' },
                //     { key: 'Acompanhante4' },
                // ]}
                data={notifications}
                renderItem={({ item }) =>
                    <View className={"caixa_recomendação"} style={[styles.caixaRecom]}>
                        <View className={"cabecalho"} style={[styles.caixaRecomCabecalho]}>
                            <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                            <View style={styles.feedHeaderInfo}>
                                <Text style={[styles.container]}>{item.nome_p}</Text>
                                <Text style={[styles.container, styles.textFuncao, { fontSize: 20 }]}>{item.action}</Text>
                            </View>
                        </View >
                        <View className={"geolocation"} style={[styles.container]}>
                        </View>
                        {/* <Image style={[styles.container, styles.feedPreview]} /> */}
                        <Text>Informações do acompanhante.</Text>
                        <View style={[styles.feedButtons]}>
                            <TouchableOpacity style={[styles.container, styles.recButton, { backgroundColor: "#12FABE" }]} onPress={() => aceitarLink(item)}><Text>ACEITAR</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.container, styles.recButton, { backgroundColor: "#FAA9A9" }]} onPress={() => recusarLink(item)}><Text>RECUSAR</Text></TouchableOpacity>
                        </View>
                    </View>}
            />
        </View>
    );
}

export default Notificacoes;