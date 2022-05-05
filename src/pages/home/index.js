import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import PaginaInicial from './pagInicial';
import Entrar from './entrar';
import QuemSomosNos from './quemSomos';
import CadastroUm from '../cadastro/cadastroUm'
import CadFuncao from '../cadastro/cadFuncao';


const Stack = createNativeStackNavigator();

function Home (){
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PaginaInicial'>
          <Stack.Screen name='PaginaInicial' component={ PaginaInicial } options={{ title: 'Hospital Companion' }} />
            <Stack.Screen name='Entrar' component={ Entrar } options={{ title: 'Entrar' }}/>
            <Stack.Screen name='QuemSomosNos' component={ QuemSomosNos } options={{ title: 'Quem Somos Nós' }} />
            <Stack.Screen name='CadastroUm' component={ CadastroUm } options={ { title: 'Cadastro' } } />
            <Stack.Screen name='CadFuncao' component={ CadFuncao } options={{ title: 'Cadastro' }} />
        </Stack.Navigator>
      </NavigationContainer>
      );
};
export default Home;