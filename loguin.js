import React from 'react'; 
import { Stylesheet, Text, TextInput, View, Button } from 'react-native'; 
import firebaseSDK from '../config/firebase SDK';
export default class Login extends React.Component {
    static navigationoptions = {
        title: 'RN + rolamole' 
    };

    state = {
        name: 'Alice', 
        email: 'test@live.com',
        password: '123456', 
        avatar: ''
    };
    onPressLogin = async() => {  
        const user = {
            name: this.state. name,
            email: this.state.email, 
            password: this.state.password, 
            avatar: this.state.avatar
        };

        const response = firebaseSDK.login(
            user, 
            this.loginSuccess, 
            this.loginFailed
        );
    };

    loginSuccess = () => {
        console.log('login successful, navigate to chat.'); 
        this.props.navigation.navigate('Chat', {
            name: this.state.name, 
            email: this.state.email, 
            avatar: this.state.avatar
        });
    };
    
    loginFailed = () => {
        alert('Login failure. Please tried again.');
    }

    onChange TextEmail = email => this.setstate({ email }); 
    onChange TextPassword = password => this.setstate({ password });

        render() { 
            return ( 
                <View>
                    <Text style={styles.title}>Email:</Text> 
                    <TextInput
                        style={styles.nameInput} 
                        placeholder="test3@gmail.com" 
                        onChange Text={this.onChange TextEmail} 
                        value={this.state.email}
                    />
                    <Text style={styles.title}>Password:</Text> 
                    <TextInput
                        style={styles.name Input}
                            onChange Text={this.onChange Text Password} 
                                value={this.state. password}
                    />
                    <Button
                        title="Login" 
                        style={styles.buttonText} 
                        onPress={this.onPressLogin}
                    />

                    <Button
                        title="Signup" 
                        style={styles.buttonText} 
                        onPress={() => this.props.navigation.navigate ('Signup') }
                    />
                </View>
            );
        }
    }
const styles = StyleSheet.create({ 
    title: {
        marginTop: 216, 
        marginLeft: 22, 
        fontsize: 12
    },
    nameInput: {
        height: 14 * 2, 
        margin: 14, 
        paddingHorizontal: 18, 
        bordercolor: '#a4f',    
        borderWidth: 1, 
        fontSize: 14
    },
    buttonText: {
        marginLeft: 18, 
        fontSize: 40
    }
});
