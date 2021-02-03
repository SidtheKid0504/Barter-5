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
    ScrollView,
    FlatList 
} from 'react-native';
import { ListItem } from 'react-native-elements';
import AppHeader  from "../components/Header";
import firebase from 'firebase';
import db from '../config';

export default class HomeScreen extends React.Component {
  constructor() {
      super();
      this.state = {
          itemList: []
      }
      this.dbRef = null
  }
  keyExtractor = (item,index) => index.toString();
  renderItem = ({item, i}) => {
      return(
          <ListItem 
          key= {i}
          title= {item.itemName}
          subtitle = {item.itemDescription}
          titleStyle= {{color: "#00000", fontWeight: "bold"}}
          rightElement= {
              <TouchableOpacity
                  style={styles.button}
                  onPress= {() => {

                  }}
              >
                  <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
          }
          bottomDivider
          />
      )
  }

  componentDidMount() {
      this.getItems()
  }
  
  render() {
      return(
          <View style={styles.container}>
              <AppHeader title="Find Items"/>
              <View style={styles.container}>
                  {
                      this.state.itemList.length === 0 ? 
                      (
                          <View style={styles.subContainer}>
                              <Text style={{fontSize: 24, fontWeight: "bold"}}>No Items</Text>
                          </View>
                      )
                      :(
                          <FlatList
                              keyExtractor= {this.keyExtractor}
                              data= {this.state.itemList}
                              renderItem= {this.renderItem}

                          ></FlatList>
                      )
                  }
              </View>
              
          </View>
      )
  }
  
  getItems = () => {
      this.dbRef = db.collection("items").onSnapshot((snapshot) => {
          var itemList = snapshot.docs.map(document => document.data());
          this.setState({
              itemList: itemList
          })
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
      flex:1,
      justifyContent: "center",
      alignItems: "center"
  },
  button: {
      width: 100,
      height: 30,
      alignItems: "center", 
      justifyContent: 'center',
      backgroundColor:"#ADD8E6",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16
  },
  buttonText: {
      color: "black"
  }
})