import React from "react";
import { Text, View, Image } from "react-native";
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
    </View>;
}
export default Chat;