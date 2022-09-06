import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from '../../styles';
import * as Location from "expo-location";
import {firebase} from '../../firebaseConnection';


const AppPaginaInicialAc = function ({ route, navigation }) {
    const params = route.params;
    const initialRegion = {
        latitude: 49.2576508,
        longitude: -123.2639868,
        latitudeDelta: 100,
        longitudeDelta: 100,
    };
    const [region, setRegion] = useState({ latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0 });
    const [pacientes, setPacientes] = useState([]);
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
                const pacientesArray = [];
                snapshot.forEach((doc) => {
                    // if (doc.data()['funcao'] == "Acompanhante") {
                    //     pacientesArray.push(doc);
                    // }
                    if (doc.data()['funcao'] && doc.data()['funcao'] == "Paciente") {
                        pacientesArray.push({ key: doc.data()['nome'], coords: { latitude: doc.data()['coords']['latitude'], longitude: doc.data()['coords']['longitude'], latitudeDelta: 0, longitudeDelta: 0 } });
                    }
                    // pacientesArray.push(doc.data()['funcao']);
                });
                setPacientes(pacientesArray);
                console.log(pacientesArray);
            });
        }
    }
    useEffect(() => {
        getCurrentPosition();
    },[]);
    console.log(route.params);
    return (
        <View className={"tela"} style={styles.appTela}>
            <View className={"Sidebar"} style={styles.sidebar}>
                <View style={[styles.sidebar, styles.sidebarHeader]}>
                    <Image style={[styles.sidebar, styles.profilePic]} source={require('../../../assets/user.png')}/>
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textName]} numberOfLines={1}>{params.username}</Text>
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textFuncao]} numberOfLines={1}>{params.funcao}</Text>
                </View>
                <View style={styles.navButtons}>
                    <FlatList
                        data={[
                            { key: 'Página inicial', anchor: '' },
                            { key: 'CHAT', anchor: 'Chat' },
                            { key: 'Dados pessoais', anchor: 'DadosPessoais'},
                            { key: 'Quem somos', anchor: 'QuemSomosNos' },
                            { key: 'Fale conosco', anchor: '' },
                            { key: 'Notificações', anchor: '' },
                            { key: 'Sair da conta', anchor: '' }
                        ]}
                        renderItem={({ item }) => <TouchableOpacity style={styles.navItem} onPress={() => item.anchor && navigation.navigate(item.anchor, params)}>
                            <Text style={styles.navItem}>{item.key}</Text>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
            <View className={"Conteudo"} style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={initialRegion}>
                        {pacientes.map((paciente) => {
                            <Marker
                            coordinate={{latitude: paciente.coords['latitude'],
                                    longitude: paciente.coords['longitude']}}
                            title={paciente.key}
                            description={"Paciente"}
                            />
                        })}
                </MapView>
            </View>
        </View>
    );
}

export default AppPaginaInicialAc;