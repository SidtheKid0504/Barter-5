import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    Modal, 
    KeyboardAvoidingView,
    ScrollView 
} from 'react-native';
import AppHeader  from "../components/Header";
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userID: firebase.auth().currentUser.email,
            itemName: '',
            description: ''
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <AppHeader title="Exchange Item"/>
                <KeyboardAvoidingView style={styles.keyboardView}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder= {"Item Name"}
                        onChangeText = {(text) => {
                            this.setState({
                                itemName: text
                            });
                        }}
                        value = {this.state.itemName}
                    />

                    <TextInput
                        style={[styles.formTextInput, {width: "75%",height: 300}]}
                        placeholder= {"Item Description"}
                        multiline
                        numberOfLines = {8}
                        onChangeText = {(text) => {
                            this.setState({
                                description: text
                            });
                        }}
                        value = {this.state.description}
                    />
                    <TouchableOpacity
                        onPress= {()=> {
                            this.addItem(this.state.itemName, this.state.description);
                        }}
                        style={styles.addButton}
                    >
                        <Text>Request Book</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
    addItem = (itemName, description) => {
        var userID = this.state.userID;

        db.collection("items").add({
            userID: userID,
            itemName: itemName,
            itemDescription: description
        });
        this.setState({
            itemName: '',
            description: ''
        })
        return Alert.alert("Item Added");
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    keyboardView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    formTextInput: {
        backgroundColor: "#68ff7c",
        width: "75%",
        height: 35,
        marginTop: 20, 
        alignSelf: "center",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    addButton: {
        width: '75%',
        height: 40,
        alignItems: "center", 
        justifyContent: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        backgroundColor:"#ffffe0",
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
    }
})