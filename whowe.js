import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Quem somos");
  const bodyText = "Somos apenas estudantes com o nobre sonho de criar um mundo melhor. Um dia tive meu dedo quebrado em um acidente domestico, enquanto estava sendo atendido escutei um paciente contando que nao tinha ninguém para acompanhalo caso algo grave acontecesse com ele, aquilo tocou meu coração e despertouu am anseio de ajudalo, porém nada pude fazer, o sentimento angustiante só aumentou quando cheguei em casa e conversei com meu pai, um mediador de cuidadores de idosos a mais de 10 anos e minha mae uma tecnica de enfermagem a 22 anos, com toda sua experencia me dissera que isso é extremamente comum, diversas pessoas perdem exaames mais intrusivos, até mesmos cirurgias pela falta de acompanhante, e dessa vontade de fazer o mundo melhor surgiu minha ideia, e com a ajuda de um grande amigo eric e outros ajudantes o anseio de ajudar o proximo tomou forma e virou um projeto de tcc, uma apresentação de power point e agora um aplicativo";

  const onPressTitle = () => {
    setTitleText("Quem somos [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default TextInANest;