import React from 'react';
import styles from '../../styles';
import { View, Text } from 'react-native';

const HomePage = ( user ) => {
    return(
        <View style={styles.container}>
            { console.log(user) }
            <Text style={styles.textTitulo}>Home Page</Text>
        </View>
    );
};


export default HomePage;