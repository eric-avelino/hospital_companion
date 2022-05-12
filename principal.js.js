import React from 'react';
import { Text, View, FlatList, Button } from "react-native";

const paginaInicial = function () {
    return (
        <View className={"TELA"}>

            <View className={"Sidebar"}>
                <View>
                    <Image />
                    <Text>Nome</Text>
                    <Text>Paciente</Text>

                </View>

                <FlatList
                    data={[
                        { key: 'Página inicial' },
                        { key: 'CHAT' },
                        { key: 'Quem somos' },
                        { key: 'Fale conosco' },


                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />

                <View className={'configg'}>
                    <FlatList
                        data={[
                            { key: 'Notificções' }
                            { key: 'Sair da conta' }
                        ]}
                    />


                </View>


            </View>
            <View className={"meio"}>
                <View className={"caixa_recomendação"}>
                    <View className={"cabeçalho"}>
                        <Image />
                        <Text>Nome</Text>
                        <Text>Acompanhante</Text>



                    </View>
                    <Button
                        title="CHAT"
                        color="green" />
                    <Button
                        title="CONTRATA"
                        color="green" />

                </View>
                <Button
                    title="AGENDAR"
                    color="green" />



            </View>


        </View>
    );
)}

export default paginaInicial;