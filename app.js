    import {createStackNavigator } from 'react-navigation';

import

Chat from './components/Chat';

import { createStackNavigator } from 'react-navigation'; 
import Login from './components/Login'; 
import signup from './components/signup'; 
import chat from './components/Chat';

export default createstackNavigator({
    Login: { screen: Login }, 
    Signup: { screen: Signup },
    Chat: { screen: Chat } 
});