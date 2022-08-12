import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../../styles';

const AppPaginaInicialAc = function ({ route, navigation }) {
    const params = route.params;
    console.log(route.params);

    const initialRegion = {
        latitude: 49.2576508,
        longitude: -123.2639868,
        latitudeDelta: 100,
        longitudeDelta: 100,
    };

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

                </MapView>
            </View>
        </View>
    );
}

export default AppPaginaInicialAc;