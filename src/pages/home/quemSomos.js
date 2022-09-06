import {  Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles'

const QuemSomosNos = () => {
    const [titleText, setTitleText] = useState("Quem somos");
    const bodyText = "Somos apenas estudantes com o nobre sonho de criar um mundo melhor. Um dia tive meu dedo quebrado em um acidente domestico, enquanto estava sendo atendido escutei um paciente contando que nao tinha ninguém para acompanha-lo caso algo grave acontecesse com ele, aquilo tocou meu coração e despertou um anseio de ajuda-lo, porém nada pude fazer, o sentimento angustiante só aumentou quando cheguei em casa e conversei com meu pai, um mediador de cuidadores de idosos a mais de 10 anos e minha mãe uma técnica de enfermagem à 22 anos, com toda sua experiência me disseram que isso é extremamente comum, diversas pessoas perdem exames mais intrusivos, até mesmos cirurgias pela falta de acompanhantes, e dessa vontade de fazer o mundo melhor surgiu minha ideia, e com a ajuda de um grande amigo eric e outros ajudantes o anseio de ajudar o proximo tomou forma e virou um projeto de tcc, uma apresentação de power point e agora um aplicativo";
  
    const onPressTitle = () => {
      setTitleText("Quem somos S2");
    };
  
    return (
      <View style={ styles.container }>
      <Text style={styles.textCadastro}>
        <Text style={styles.textTitulo} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
        </View>
    );
  };
  export default QuemSomosNos;