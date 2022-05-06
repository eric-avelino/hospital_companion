import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import PaginaInicial from './pagInicial';
import Entrar from './entrar';
import QuemSomosNos from './quemSomos';
import CadastroUm from '../cadastro/cadastroUm'
import CadFuncao from '../cadastro/cadFuncao';
import HomePage from './homePage';


const Stack = createNativeStackNavigator();

function Home (){
    const [user, setUser] = useState(null);  
    return (
    <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name='PaginaInicial' options={{ title: 'Hospital Companion' }}>
              { (user) => <PaginaInicial user={ user } />}
            </Stack.Screen>
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