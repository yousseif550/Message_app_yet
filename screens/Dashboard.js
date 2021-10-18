import firebase from '../database/firebase';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {Constants} from 'expo';

export default class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      message: '',
      messages: [],

      textInput : [],
      inputData : []
    }

    this.addItem = this.addItem.bind(this);
  }

  //function to add TextInput dynamically
  addTextInput = () => {
    let textInput = this.state.textInput;
    textInput.push(
      <View style={styles.msgBox}>
          
      <TextInput placeholder='ECRIVEZ VOTRE MESSAGE'
        value={this.state.newMessage}
        onChangeText={(text) => this.setState({message: text})}
        style={styles.txtInput}/>
    </View>
      )
    this.setState({ textInput });
  }
  //function to remove TextInput dynamically
  removeAndAddItem = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });

    if (!this.state.message) return;

    const newMessage = firebase.database().ref()
                          .child("messages")
                          .push();
    newMessage.set(this.state.message, () => this.setState({message: ''}))
  }


  addItem () {
  }

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const initMessages = [];
          Object
            .keys(data)
            .forEach(message => initMessages.push(data[message]));
          this.setState({
            messages: initMessages
          })
        }
      });

    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })

  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.textInput.map((value) => {
          return value
        })}

        <FlatList data={this.state.messages}
          renderItem={
            ({item}) => 
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item}
              </Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
          />

          <View style={styles.fixButton}>
            <Button title='Ajouter' onPress={() => this.addTextInput(this.state.textInput.length)} />
            <Button title='Envoyer' onPress={() => this.removeAndAddItem(this.state.textInput.length)}/>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  msgBox: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  txtInput: {
    
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  fixButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textInput: {
  height: 40,
  borderColor: 'black', 
  borderWidth: 1,
    justifyContent: 'center',
  },
  listItem: {
    fontSize: 18,
    paddingLeft: 30,
    padding: 10
  }
});