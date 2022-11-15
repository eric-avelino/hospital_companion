import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { firebase } from "../../firebaseConnection";

const Notificacoes = () => {
    const [notifications, setNotifications] = useState('');
    const [pacData, setPacData] = useState('');
    const [volData, setVolData] = useState('');

    // Render all pendent conexions
    if (firebase.app.length && notifications == '') {
        const userRef = firebase.auth().currentUser;
        // Listar todos os Ids no object acompanhamento
        firebase
            .firestore()
            .collection("notifications")
            .doc(userRef.uid)
            .get()
            .then(documentSnapshot => {
                const notificationsSnapshot = documentSnapshot.data();
                setNotifications(notificationsSnapshot["notifications"]);
                console.log(notificationsSnapshot["notifications"]);
            });
    }
    const aceitarLink = (link) => {
        console.log("Aceitando " + link["nome_p"]);
        setVolData({
            uid: link["uid_v"],
            nome: link["nome_v"]
        });
        setPacData({
            uid: link["uid_p"],
            nome: link["nome_p"]
        });
        if (firebase.app.length) {
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
                            links: firebase.firestore.FieldValue.arrayUnion({linkId: docRef.id})
                        }, {merge: true})
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(pacData['uid'])
                        .set({
                            links: firebase.firestore.FieldValue.arrayUnion({linkId: docRef.id})
                        }, {merge: true})
                })
                .catch((e) => {
                    alert(e);
                }).then(alert("Acompanhante adicionado"));
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
                            <TouchableOpacity style={[styles.container, styles.recButton, { backgroundColor: "#FAA9A9" }]}><Text>RECUSAR</Text></TouchableOpacity>
                        </View>
                    </View>}
            />
        </View>
    );
}

export default Notificacoes;