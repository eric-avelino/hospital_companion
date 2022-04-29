import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

const PaginaInicial = () => {
	const pressConvidado = () => {
	    };  
    return (
        <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/logo.png')} />
              <Button 
          title='Entrar'
          color='#1b4'
          />
        <Text 
          style={styles.text}
          onPress={pressConvidado}>Entrar como convidado</Text>
        <StatusBar style="auto" />
        </View>
      );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen name='PaginaInicial' component={ PaginaInicial } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5da',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 500,
      height: 500,
      resizeMode: 'stretch',
    },
    text: {
      color: '#888',
      clickable: true,
    },
  })
