import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import styles from '../../styles';

const AppPaginaInicialPa = function ({ route, navigation }) {
    const params = route.params;
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
                <FlatList
                    data={[
                        { key: 'Acompanhante1' },
                        { key: 'Acompanhante2' },
                        { key: 'Acompanhante3' },
                        { key: 'Acompanhante4' },
                    ]}
                    renderItem={({ item }) => <View className={"caixa_recomendação"} style={[styles.caixaRecom]}>
                        <View className={"cabecalho"} style={[styles.caixaRecomCabecalho]}>
                            <Image style={[styles.profilePic, styles.picFeed]} source={require('../../../assets/user.png')} />
                            <View style={styles.feedHeaderInfo}>
                                <Text style={[styles.container]}>{item.key}</Text>
                                <Text style={[styles.container, styles.textFuncao]}>Acompanhante</Text>
                            </View>
                        </View >
                        <Image style={[styles.container, styles.feedPreview]} />
                        <Text>Informações do acompanhante.</Text>
                        <View style={[styles.feedButtons]}>
                            <TouchableOpacity style={[styles.container, styles.recButton]}><Text>CHAT</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles.container, styles.recButton]}><Text>CONTRATAR</Text></TouchableOpacity>
                        </View>
                    </View>}
                />
                <TouchableOpacity style={[styles.agendarButton]}>
                    <Text style={{color: 'white'}}>AGENDAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AppPaginaInicialPa;