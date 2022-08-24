import {firebase} from '../../firebaseConnection';
import * as Location from "expo-location";

const GetCurrentPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        Alert.alert("Permissão negada", "Localização não adquirida");
    }
    let {
        coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync();
    setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });
    if (firebase.app.length) {
        const userRef = firebase.auth().currentUser;
        firebase
            .firestore()
            .collection("users")
            .doc(userRef.uid)
            .update({
                coords: { latitude, longitude }
            });
        firebase
            .firestore()
            .collection("users")
            .onSnapshot((snapshot) => {
                const acompanhantesArray = [];
                snapshot.forEach((doc) => {
                    // if (doc.data()['funcao'] == "Acompanhante") {
                    //     acompanhantesArray.push(doc);
                    // }
                    if (doc.data()['funcao'] && doc.data()['funcao'] != "Paciente") {
                        acompanhantesArray.push(doc.data())
                    }
                    // acompanhantesArray.push(doc.data()['funcao']);
                });
                setAcompanhantes(acompanhantesArray);
                console.log(acompanhantesArray);
            });
    }
}
export default GetCurrentPosition;