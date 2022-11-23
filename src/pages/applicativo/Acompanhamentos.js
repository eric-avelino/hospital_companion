import { FlatList, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../styles";
import { firebase } from "../../firebaseConnection";


const Acompanhamentos = ({ navigation }) => {
    const [userData, setUserData] = useState('');
    const [links, setLinks] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [deleted, setDeleted] = useState('');


    const onRefresh = () => {
        setIsRefreshing(true);
        if (firebase.app.length && links == '') {
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
                    const linksData = [];
                    for (let link of userData['links']) {
                        linksData.push(link["linkId"]);
                    }
                    console.log('Dados do usuário conseguidos\n', userData['links']);
                    async function getLinks() {
                        console.log("linksData var: ", linksData);
                        const linksArray = await firebase.firestore().collection("links").where(firebase.firestore.FieldPath.documentId(), 'in', linksData).get();
                        const linkDocs = linksArray.docs.map((doc) => ({linkId: doc.id, data: doc.data()}));
                        console.log("linkDocs", linkDocs);
                        // console.log(linksData);
                        // for(let link of linksData){
                        //     firebase
                        //         .firestore()
                        //         .collection("links")
                        //         .doc(link["linkId"])
                        //         .get()
                        //         .then((documentSnapshot => {
                        //             console.log("Pushing into linksArray: ", documentSnapshot.data());
                        //             linksArray.push(documentSnapshot.data());
                        //         }));
                        // };
                        // O que está abaixo está rodando antes de terminar o forloop de cima
                        setLinks(linkDocs);
                        console.log("links: ", links);
                        // console.log("linksArray: " , linksArray);
                        setIsRefreshing(false);
                        return linkDocs;
                    }
                    getLinks();
                });
        }
    }
    const excluirAcompanhante = (acomp) => {
        console.log("acomp: " , acomp);
        let nome = userData["funcao"] == "Acompanhante" ? acomp['data']['nome_p'] : acomp['data']['nome_v'];
        if (deleted != "" && deleted == acomp["linkId"]) {
            // delete
            if (firebase.app.length && userData != '') {
                const userRef = firebase.auth().currentUser;
                firebase
                    .firestore()
                    .collection("links")
                    .doc(acomp["linkId"])
                    .delete()
                    .then(()=> {
                        alert("Link deleted.");
                        onRefresh();
                    })
                    .catch((e)=>{
                        alert(e);
                    });
                // Listar todos os Ids no objet acompanhamento
                // firebase
                //     .firestore()
                //     .collection("users")
                //     .doc(userRef.uid)
                //     .get()
                //     .then(documentSnapshot => {
                //         const userData = documentSnapshot.data();
                //         const newAc = Array.prototype.filter.call(acompanhantes, (item) => (item["nome"] != acomp["nome"]));
                //         firebase
                //             .firestore()
                //             .collection("users")
                //             .doc(userRef.uid)
                //             .update({
                //                 acompanhantes: newAc
                //             })
                //             .catch((e) => {
                //                 alert(e);
                //             }).then( () => {
                //                 alert("Acompanhante removido");
                //                 navigation.navigate("Acompanhamentos");
                //             });
                //         console.log(newAc);
                //     });
            }
            console.log("Excluding " + acomp["nome"]);
        }
        else {
            setDeleted(acomp["linkId"]);
            console.log("Changed exclusion");
        }
        // console.log(acomp["nome"], "\nDeleted value: ", deleted);
        // console.log(acompanhantes);
        alert("Deseja excluir " + nome + "?");
    }
    useEffect(() => {
        console.log("Componente montado");
        onRefresh();
    }, []);
    return <View style={styles.container}>
        <FlatList
            data={links}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            renderItem={({ item }) => {
                return <View style={[{ borderColor: "grey" }, { borderWidth: 4 }, { borderStyle: "solid" }, { margin: 5 }, { padding: 5 }]}>
                    <View>
                        <Text style={[styles.textTitulo, { fontSize: 30 }, { textAlign: "center" }]}>Hospital AMI</Text>
                        <TouchableOpacity style={[styles.recButton]} onPress={() => excluirAcompanhante(item)}><Text style={[styles.textTitulo, deleted == item.linkId ? { color: "orange" } : { color: "red" }, { fontSize: 30 }]}>X</Text></TouchableOpacity>
                        <Text style={styles.textTitulo}>Data: 27/02/2023</Text>
                    </View>
                    <View style={styles.caixaRecomCabecalho}>
                        <View style={styles.feedHeaderInfo}>
                            <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                            <Text>Nome: {userData["funcao"] == "Acompanhante" ? item.data.nome_p : item.data.nome_v}</Text>
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