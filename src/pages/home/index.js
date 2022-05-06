import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import PaginaInicial from './pagInicial';
import Entrar from './entrar';
import QuemSomosNos from './quemSomos';
import CadastroUm from '../cadastro/cadastroUm'
import CadFuncao from '../cadastro/cadFuncao';
import HomePage from './homePage';
// import Chat from '../chat';


const Stack = createNativeStackNavigator();

function Home (){
    const [user, setUser] = useState(null);  
    return (
    <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name='HomePage' user={ user } component={ HomePage } options={{ title: 'Home Page' }} />
              <Stack.Screen name='Chat' options={{ title: 'Chat' }} />
            </>
          ): (
            <>
              <Stack.Screen name='PaginaInicial' component={ PaginaInicial } options={{ title: 'Hospital Companion' }} />
              <Stack.Screen name='Entrar' component={ Entrar } options={{ title: 'Entrar' }} />
              <Stack.Screen name='QuemSomosNos' component={ QuemSomosNos } options={{ title: 'Quem Somos Nós' }} />
              <Stack.Screen name='CadastroUm' component={ CadastroUm } options={ { title: 'Cadastro' } } />
              <Stack.Screen name='CadFuncao' component={ CadFuncao } options={{ title: 'Cadastro' }} />
              <Stack.Screen name='HomePage' component={ HomePage } options={{ title: 'HomePage' }} />
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
      );
};
export default Home;