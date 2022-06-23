import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../../styles';
import { firebase } from '../../firebaseConnection';

const Funcao = ({ funcao, username, navigation, uid }) => {
  const addFuncao = (funcao, uid, username, navigation) => {
    if(firebase.app.length){
      const userRef = firebase.auth().currentUser
      userRef.updateProfile({funcao: funcao}).then(()=> {
        console.log("Updated funcao");
        console.log(userRef)
        firebase
          .firestore()
          .collection('users')
          .doc(userRef.uid)
          .set({
            funcao: funcao,
          },
          { merge: true });
        if(funcao == "Paciente"){
          navigation.navigate("AppPagInicialPa", {username, funcao});
        }
        else{
          navigation.navigate("AppPagInicialAc", {username, funcao});
        }
      })
    }
  }
  return (
    <TouchableOpacity style={styles.funcaoButton} onPress={() => addFuncao(funcao, uid, username, navigation)}>
      <Text style={styles.textCadastro}>{funcao}</Text>
    </TouchableOpacity>
  );
};
const CadFuncao = ({ route, navigation }) => {
  const params = route.params;
  return (
    <SafeAreaView style={styles.funcaoContainer}>
      <View style={styles.container}>
        <Text>{params.nome}</Text>
        <View style={styles.funcaoParent}>
          <Funcao funcao={'Paciente'} username={params.nome} navigation={navigation} uid={params.uid} />
          <Funcao funcao={'Acompanhante'} username={params.nome} navigation={navigation} uid={params.uid}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CadFuncao;