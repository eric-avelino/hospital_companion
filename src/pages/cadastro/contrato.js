import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';

const Contrato = () => {
    return (
        <View>
            <Text style={styles.textTitulo}>ASSINATURA BIOMÉTRICA</Text>
        </View>
    );
}

export default Contrato;