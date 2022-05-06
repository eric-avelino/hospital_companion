import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


import firebaseSDK from '../config/firebase SDK';

export default class Chat extends React.Component {
    render() {
        return <GiftedChat />;
    }
}
export default class Chat extends React.Component { 
    static navigationoptions = ({ navigation }) => ({
        title: (navigation.state.params || {}).name || 'gozochat' });
    });

    state = {
        messages: []
    };
    get user() { 
        return {
            name: this.props.navigation.state.params.name, 
            email: this.props.navigation.state.params. 
            email, avatar: this.props.navigation.state.params. avatar, 
            id: firebaseSDK.uid, 
            id: firebaseSDK.uid
        };
    }
    render() { 
        return ( 
            <Giftedchat 
                messages={this.state.messages} 
                onSend={firebaseSDK.send} 
                user={this.user}
            />
        );
    }

    componentDidMount() { 
        firebaseSDK.refon (message => 
            this.setstate (previous state => ({ 
                messages: Giftedchat.append (previousstate.messages, message)
             }))
        );
    }
    componentwillUnmount() {
        firebaseSDK.refoff();
    }
}
