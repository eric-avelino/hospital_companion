import {  Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles'

const QuemSomosNos = () => {
    const [titleText, setTitleText] = useState("Quem somos");
    const bodyText = "De onde surgimos? O Hospital Companion foi, inicialmente, uma criação de um grupo de pessoas envolvidas com a área de TI que, ao se depararem com a negligência e consequentemente frágil rede de apoio familiar e social de pacientes de categorias gerais, sejam fisicamente debilitados ou para exames de rotina, resolveram criar um sistema que ligasse tais pessoas a acompanhantes voluntários que pudessem acompanhá-los, gratuitamente, em consultas e cirurgias de urgência, nas quais a presença de um acompanhante é considerada obrigatória. O objetivo principal do grupo responsável pela criação do projeto é solucionar essa falha e abranger essa necessidade pública, de forma a trazer através desse aplicativo uma solução viável. Como nosso sistema funciona? A plataforma do Hospital Companion tem como objetivo dinamizar e simplificar a contratação de acompanhantes voluntários. Pessoas acima de dezoito anos podem se cadastrar na plataforma, e aqueles que já são clientes de algum convênio específico afiliado ao Hospital Companion ganham certo privilégio na agilidade do processo de contratação de acompanhantes. Da mesma forma, pessoas que desejam se voluntariar para a categoria de acompanhantes precisam passar por um processo de admissão que engloba a avaliação de todo histórico social, especiamente antecedentes criminais, testes pscicológicos e sociais online, se assim for a preferência, para garantir sua capacitação, além da obrigatoriedade de assinar um contrato a respeito de suas delegações como acompanhante, assim estando amplamente cientes das consequências da quebra dessas normas previamente espeficicadas. O aplicativo do Hospital Companion é intuivo e modernizado com uma interface de fácil entendimento, abraçando de forma geral todo seu público.";
  
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