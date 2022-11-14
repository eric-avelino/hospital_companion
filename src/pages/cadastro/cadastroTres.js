import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';

const CadastroTres = () => {
    return (
        <View>
            <Text style={styles.textTitulo}>BIOMETRIA</Text>
        </View>
    );
}

export default CadastroTres;