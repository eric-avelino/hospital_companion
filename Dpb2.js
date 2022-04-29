import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import CButton from "./CButton";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.parent}>
          <CButton text={"Paciente"} />
          <CButton text={"Acomapanhante"} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;