import React from "react";
import { Text, View, Image, TextInput, FlatList } from "react-native";
import { useState } from "react";
import styles from "../../styles";

const Chat = ({ route }) => {
    const [messages, setMessages] = useState([]);

    const params = route.params;
    return <View style={styles.container}>
        <View style={styles.feedHeaderInfo}>
            <Image style={styles.profilePic} />
            <Text style={styles.textTitulo}>{params.username}</Text>
            <Text style={styles.textFuncao}>{params.funcao}</Text>
        </View>
        <View style={styles.messagesContent}>
            <FlatList 
                data={[{user: 1, text: "Vamos nos encontrar"},{user: 1, text: "Em frente ao hospital, tudo bem?"}, {user: 2, text: "Ta ok, te vejo lá!"}, {user: 1, text: "Até quinta-feira!"}]}
                renderItem={({ item }) =>
                    {if (item.user == 1) {
                        return <Text style={styles.sender}>{item.text}</Text>;
                    }
                        else{
                            return <Text style={styles.reciever}>{item.text}</Text>;
                        }
                    }
                }
            />
        </View>
        <View style={styles.messageSend}>
            <TextInput></TextInput>
        </View>
    </View>;
}
export default Chat;