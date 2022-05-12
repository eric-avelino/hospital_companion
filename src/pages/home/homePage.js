import React from 'react';
import styles from '../../styles';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }, user) => {
    return(
        <View style={styles.container}>
            { console.log(user) }
            <Text style={styles.textTitulo}>Home Page</Text>
            <Button
            title='Chat'
            color='#5ad'
            />
        </View>
    );
};


export default HomePage;