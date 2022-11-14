import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import PaginaInicial from './pagInicial';
import Entrar from './entrar';
import QuemSomosNos from './quemSomos';
import CadastroUm from '../cadastro/cadastroUm';
import CadastroDois from '../cadastro/cadastroDois';
import CadastroTres from '../cadastro/cadastroTres';
import CadFuncao from '../cadastro/cadFuncao';
import HomePage from './homePage';
import AppPagInicialPa from '../applicativo/AppPaginaInicialPa';
import AppPagInicialAc from '../applicativo/AppPaginaInicialAc';
import DadosPessoais from '../applicativo/DadosPessoais';
import Chat from '../applicativo/Chat';
import Acompanhamentos from '../applicativo/Acompanhamentos';


const Stack = createNativeStackNavigator();

function Home (){
    const [user, setUser] = useState(null);  
    return (
    <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name='AppPagInicialPa' component={ AppPagInicialPa } options={{ title: 'Página Inicial' }} />
          ): (
            <>
              <Stack.Screen name='PaginaInicial' component={ PaginaInicial } options={{ title: 'Hospital Companion' }} />
              <Stack.Screen name='Entrar' component={ Entrar } options={{ title: 'Entrar' }} />
              <Stack.Screen name='Chat' component={ Chat } options={{ title: 'Chat' }} />
              <Stack.Screen name='Acompanhamentos' component={ Acompanhamentos } options={{title: 'Acompanhamentos'}} />
              <Stack.Screen name='AppPagInicialPa' component={ AppPagInicialPa } options={{ title: 'Página Inicial' }} />
              <Stack.Screen name='AppPagInicialAc' component={ AppPagInicialAc } options={{ title: 'Página Inicial' }} />
              <Stack.Screen name='DadosPessoais' component={ DadosPessoais } options={{ title: 'Dados Pessoais' }} />
              <Stack.Screen name='QuemSomosNos' component={ QuemSomosNos } options={{ title: 'Quem Somos Nós' }} />
              <Stack.Screen name='CadastroUm' component={ CadastroUm } options={ { title: 'Cadastro' } } />
              <Stack.Screen name='CadastroDois' component={ CadastroDois } options={ { title: 'Cadastro' } } />
              <Stack.Screen name='CadastroTres' component={ CadastroTres } options={ { title: 'Cadastro' } } />
              <Stack.Screen name='CadFuncao' component={ CadFuncao } options={{ title: 'Cadastro' }} />
              <Stack.Screen name='HomePage' component={ HomePage } options={{ title: 'HomePage' }} />
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
      );
};
export default Home;