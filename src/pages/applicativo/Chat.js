import React from "react";
import { Text, View, Image, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import styles from "../../styles";
import { TouchableOpacity } from "react-native";

const Chat = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [hasClicked, setHasClicked] = useState(false);

    // const Screen1 = (<View style={styles.container}>
    //     <View style={[styles.container, {backgroundColor: "#AAA"}]}>
    //         <FlatList
    //             data={[{ name: "Maria" }, { name: "Eric" }]}
    //             renderItem={({ item }) => {
    //                 <View style={[styles.feedHeaderInfo, {backgroundColor: "#AFF"}]}>
    //                     <Image style={styles.profilePic} />
    //                     <Text style={styles.textTitulo}>{item.name}</Text>
    //                 </View>
    //             }}
    //         />
    //     </View>
    // </View>);
    // const Screen2 = (<View style={styles.container}>
    //     <TouchableOpacity style={[styles.agendarButton, { backgroundColor: "#FFAA44" }]}
    //         onPress={() => { setHasClicked(false) }}>
    //         <Text style={[{ color: 'white' }, { fontWeight: "bold" }]}>Voltar</Text>
    //     </TouchableOpacity>
    //     <View style={styles.feedHeaderInfo}>
    //         <Image style={styles.profilePic} />
    //         <Text style={styles.textTitulo}>NOME</Text>
    //         <Text style={styles.textFuncao}>FUNCAO</Text>
    //     </View>
    //     <View style={styles.messagesContent}>
    //         <FlatList
    //             data={[{ user: 1, text: "Vamos nos encontrar" }, { user: 1, text: "Em frente ao hospital, tudo bem?" }, { user: 2, text: "Ta ok, te vejo lá!" }, { user: 1, text: "Até quinta-feira!" }]}
    //             renderItem={({ item }) => {
    //                 if (item.user == 1) {
    //                     return <Text style={styles.sender}>{item.text}</Text>;
    //                 }
    //                 else {
    //                     return <Text style={styles.reciever}>{item.text}</Text>;
    //                 }
    //             }
    //             }
    //         />
    //     </View>
    //     <View style={styles.messageSend}>
    //         <TextInput></TextInput>
    //     </View>
    // </View>);
    useEffect(()=>{
        setHasClicked(false);
    },[]);    

    const params = route.params;
    return <View>
        {hasClicked == false ? (
            <View>
            <Text style={[styles.textTitulo, { height: 100 }]}>CHATS</Text>
            <FlatList
                data={[{ name: "MARIA" }, { name: "ERIC" }]}
                renderItem={({ item }) =>
                <View>
                        <View style={[styles.feedHeaderInfo, { backgroundColor: "#AFF" }, { borderBottomColor: "#7BE" }, { borderBottomWidth: 5 }]}>
                            <Image style={styles.profilePic} />
                            <TouchableOpacity onPress={setHasClicked(true)}><Text style={styles.textTitulo}>{item.name}</Text></TouchableOpacity>
                        </View>
                    </View>}
            />
        </View>) : (
                <View style={styles.container}>
                    <TouchableOpacity style={[styles.agendarButton, { backgroundColor: "#FFAA44" }]}
                        onPress={() => { setHasClicked(false) }}>
                        <Text style={[{ color: 'white' }, { fontWeight: "bold" }]}>Voltar</Text>
                    </TouchableOpacity>
                </View>
        )}
    </View>
}
        export default Chat;