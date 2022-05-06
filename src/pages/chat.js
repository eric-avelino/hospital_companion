import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { firebase } from '../firebaseConnection';

export default class Chat extends React.Component { 
    static navigationoptions = ({ navigation }) => ({
        title: (navigation.state.params || {}.name || 'gozochat' )
    });

    state = {
        messages: []
    };
    get user() { 
        return {
            name: this.props.navigation.state.params.name, 
            email: this.props.navigation.state.params.email, 
            avatar: this.props.navigation.state.params. avatar, 
            id: firebase.uid
        };
    }
    render() { 
        return ( 
            <Giftedchat 
                messages={this.state.messages} 
                onSend={firebase.send} 
                user={this.user}
            />
        );
    }

    componentDidMount() { 
        firebase.refon (message => 
            this.setstate (previousstate => ({ 
                messages: Giftedchat.append (previousstate.messages, message)
             }))
        );
    }
    componentwillUnmount() {
        firebase.refoff();
    }
}
