import { StyleSheet, Button, Text, View, Image } from 'react-native';

export default PaginaInicial = () => {
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