import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { Header, Icon } from 'react-native-elements';

const AppHeader = props => {
    return(
        <Header centerComponent={{
            text: props.title,
            style: {color: "#FFFFFF", fontSize:25, fontWeight: "bold", padding: 20}
        }}
        backgroundColor="#00008b"
        />
    )
}

export default AppHeader