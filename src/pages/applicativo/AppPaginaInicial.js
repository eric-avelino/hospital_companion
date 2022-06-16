import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import styles from '../../styles';

const AppPaginaInicial = function ({ route, navigation }) {
    const username = route.params;
    console.log(route.params);
    return (
        <View className={"tela"} style={styles.appTela}>
            <View className={"Sidebar"} style={styles.sidebar}>
                <View style={[styles.sidebar, styles.sidebarHeader]}>
                    <Image style={[styles.sidebar, styles.profilePic]}/>
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textName]}>{username}</Text>
                    <Text style={[styles.sidebar, styles.sidebarHeader, styles.textFuncao]}>Paciente</Text>
                </View>

                <FlatList
                    data={[
                        { key: 'Página inicial', anchor: '' },
                        { key: 'CHAT', anchor: '' },
                        { key: 'Quem somos', anchor: 'QuemSomosNos' },
                        { key: 'Fale conosco', anchor: '' },
                    ]}
                    renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate(item.anchor)}>{item.key}</TouchableOpacity>}
                />
                <View className={'config'}>
                    <FlatList
                        data={[
                            { key: 'Notificações' },
                            { key: 'Sair da conta' }
                        ]}
                        renderItem={({ item }) => <TouchableOpacity style={styles.item}>{item.key}</TouchableOpacity>}
                    />
                </View>
            </View>
            <View className={"Conteudo"} style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Acompanhante1' },
                        { key: 'Acompanhante2' },
                        { key: 'Acompanhante3' },
                        { key: 'Acompanhante4' },
                    ]}
                    renderItem={({ item }) => <View className={"caixa_recomendação"} style={[styles.caixaRecom]}>
                        <View className={"cabecalho"} style={[styles.caixaRecomCabecalho]}>
                            <Image style={[styles.profilePic, styles.picFeed]}/>
                            <View style={styles.feedHeaderInfo}>
                                <Text style={[styles.container]}>{item.key}</Text>
                                <Text style={[styles.container, styles.textFuncao]}>Acompanhante</Text>
                            </View>
                        </View >
                        <Image style={[styles.container, styles.feedPreview]}/>
                        <Text>Informações do acompanhante.</Text>
                        <View style={[styles.feedButtons]}>
                            <TouchableOpacity style={[styles.container, styles.recButton]}>CHAT</TouchableOpacity>
                            <TouchableOpacity style={[styles.container, styles.recButton]}>CONTRATAR</TouchableOpacity>
                        </View>
                    </View>}
                />
                <TouchableOpacity style={[styles.container, styles.agendarButton]}>AGENDAR</TouchableOpacity>
            </View>
        </View>
    );
}

export default AppPaginaInicial;