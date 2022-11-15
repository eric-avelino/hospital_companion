import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region, Marker } from 'react-native-maps';
import styles from '../../styles';
import * as Location from "expo-location";
import { firebase } from '../../firebaseConnection';



const AppPaginaInicialPa = function ({ route, navigation }) {
    const params = route.params;
    const initialRegion = {
        latitude: 49.2576508,
        longitude: -123.2639868,
        latitudeDelta: 100,
        longitudeDelta: 100,
    };
    const [acompanhantes, setAcompanhantes] = useState([]);
    const [region, setRegion] = useState({ latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 });
    const adicionarAcompanhante = (acompanhante) => {
        // ADICIONAR ACOMPANHANTE A LISTA DE ACOMPANHANTES DO PACIENTE
        // TODO: 
        // - DEVE OCORRER ACEITAÇÃO DO ACOMPANHANTE
        // - DEVE SER GERADO UM CONTRAT ATRAVÉS DA TEMPLATE
        // - OS DOIS PARTIDOS DEVEM ACEITAR O CONTRATO
        // - SÓ ENTÃO A CONEXÃO DEVE SER CRIADA
        if (firebase.app.length) {
            let id = acompanhante.id;
            let nome = acompanhante.nome;
            const userRef = firebase.auth().currentUser;
            const notData = {
                uid_p: userRef.uid,
                nome_p: params.username,
                uid_v: acompanhante.id,
                nome_v: acompanhante.nome,
                action: "link"
            }
            firebase
                .firestore()
                .collection("notifications")
                .doc(acompanhante.id)
                .set(
                    { notifications: firebase.firestore.FieldValue.arrayUnion(notData) }
                    // {uid_p: userRef.uid,
                    // uid_v: acompanhante.id,
                    // action: "link"}
                    , { merge: true })
                .catch((e) => {
                    alert(e);
                }).then(alert("Acompanhante adicionado"));
            // firebase
            //     .firestore()
            //     .collection("users")
            //     .doc(userRef.uid)
            //     .get()
            //     .then(documentSnapshot => {
            //         let userData = documentSnapshot.data();
            //         console.log(userData['acompanhantes']);
            //         acArray = userData['acompanhantes'];
            //         acArray.push({id, nome});
            //         console.log(acArray);
            //         firebase
            //             .firestore()
            //             .collection("users")
            //             .doc(userRef.uid)
            //             .update({
            //                 acompanhantes: acArray
            //             })
            //             .catch((e) => {
            //                 alert(e);
            //             }).then(alert("Acompanhante adicionado"));
            //     });
        }
        console.log("Contratado: " + acompanhante.id + "\nUser: " + acompanhante.nome);
    }
    const getCurrentPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permissão negada", "Localização não adquirida");
        }
        let {
            coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync();
        setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });
        if (firebase.app.length) {
            const userRef = firebase.auth().currentUser;
            firebase
                .firestore()
                .collection("users")
                .doc(userRef.uid)
                .update({
                    coords: { latitude, longitude }
                });
            firebase
                .firestore()
                .collection("users")
                .onSnapshot((snapshot) => {
                    const acompanhantesArray = [];
                    snapshot.forEach((doc) => {
                        // if (doc.data()['funcao'] == "Acompanhante") {
                        //     acompanhantesArray.push(doc);
                        // }
                        if (doc.data()['funcao'] && doc.data()['funcao'] != "Paciente") {
                            acompanhantesArray.push({ id: doc.data()['id'], nome: doc.data()['nome'], coords: { latitude: doc.data()['coords']['latitude'], longitude: doc.data()['coords']['longitude'], latitudeDelta: 0, longitudeDelta: 0 } });
                        }
                        // acompanhantesArray.push(doc.data()['funcao']);
                    });
                    setAcompanhantes(acompanhantesArray);
                    console.log(acompanhantesArray);
                });
        }
    }


    useEffect(() => {
        getCurrentPosition();
        // if (firebase.app.lenght) {
        //     firebase
        //         .firestore()
        //         .collection("users")
        //         .onSnapshot((snapshot) => {
        //             acompanhantesArray = [];
        //             snapshot.forEach((doc) => {
        //                 if (doc.data()['funcao'] == "Acompanhante") {
        //                     acompanhantesArray.push(doc);
        //                 }
        //             });
        //             setAcompanhantes(acompanhantesArray);
        //             console.log(acompanhantesArray);
        //         })
        // }
    }, [])
    console.log(route.params);
    return (
        <View className={"tela"} style={styles.appTela}>
            <View className={"Sidebar"} style={styles.sidebar}>
                <View style={[styles.sidebar, styles.sidebarHeader]}>
                    <Image style={[styles.sidebar, styles.profilePic]} source={require('../../../assets/user.png')} />
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textName]} numberOfLines={1}>{params.username}</Text>
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textFuncao]} numberOfLines={1}>{params.funcao}</Text>
                </View>
                <View style={styles.navButtons}>
                    <FlatList
                        data={[
                            { key: 'Página inicial', anchor: '' },
                            { key: 'CHAT', anchor: 'Chat' },
                            { key: 'Acompanhamentos', anchor: 'Acompanhamentos' },
                            { key: 'Dados pessoais', anchor: 'DadosPessoais' },
                            { key: "Notificações", anchor: "Notificacoes" },
                            { key: 'Quem somos', anchor: 'QuemSomosNos' },
                            { key: 'Fale conosco', anchor: '' },
                            { key: 'Sair da conta', anchor: '' }
                        ]}
                        renderItem={({ item }) => <TouchableOpacity style={styles.navItem} onPress={() => item.anchor && navigation.navigate(item.anchor, params)}>
                            <Text style={styles.navItem}>{item.key}</Text>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
            <View className={"Conteudo"} style={styles.container}>
                <FlatList
                    // data={[
                    //     { key: 'Acompanhante1' },
                    //     { key: 'Acompanhante2' },
                    //     { key: 'Acompanhante3' },
                    //     { key: 'Acompanhante4' },
                    // ]}
                    data={acompanhantes}
                    renderItem={({ item }) =>
                        <View className={"caixa_recomendação"} style={[styles.caixaRecom]}>
                            <View className={"cabecalho"} style={[styles.caixaRecomCabecalho]}>
                                <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                                <View style={styles.feedHeaderInfo}>
                                    <Text style={[styles.container]}>{item.nome}</Text>
                                    <Text style={[styles.container, styles.textFuncao]}>Acompanhante</Text>
                                </View>
                            </View >
                            <View className={"geolocation"} style={[styles.container]}>
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    initialRegion={initialRegion}
                                    region={item.coords}>
                                    <Marker
                                        coordinate={{
                                            latitude: item.coords['latitude'],
                                            longitude: item.coords['longitude']
                                        }}
                                        title={item.nome}
                                        description={"Acompanhante"}
                                    />
                                </MapView>
                            </View>
                            {/* <Image style={[styles.container, styles.feedPreview]} /> */}
                            <Text>Informações do acompanhante.</Text>
                            <View style={[styles.feedButtons]}>
                                <TouchableOpacity style={[styles.container, styles.recButton]}><Text>CHAT</Text></TouchableOpacity>
                                <TouchableOpacity style={[styles.container, styles.recButton]} onPress={() => adicionarAcompanhante(item)}><Text>CONTRATAR</Text></TouchableOpacity>
                            </View>
                        </View>}
                />
                <TouchableOpacity style={[styles.agendarButton]}>
                    <Text style={[{ color: 'white' }, { fontWeight: "bold" }]}>AGENDAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AppPaginaInicialPa;