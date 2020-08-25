import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import Item from "./components/Item";

const initialTodos = [
  {
    id: 1, name: "Go to the gym"
  }
]
export default function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(initialTodos.slice())

  const addTodo = () => {
    if (!name) {
      Alert.alert("Oops", "A todo can not be empty!")
      return
    }
    setTodos([{ name: name, id: new Date() }, ...todos])
    setName("");
  }
  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }
  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />
        <TextInput
          placeholder="New Item"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <Button title="Add" onPress={addTodo} style={styles.button} />
        <FlatList
          style={{ width: "100%" }}
          data={todos}
          renderItem={({ item, index }) => (
            <Item
              item={item}
              index={index}
              handleDelete={handleDelete}
            />
          )
          }
        />


      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  input: {
    height: 40,
    width: "95%",
    borderWidth: 1,
    padding: 10,
    marginTop: 60,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 5
  },
  button: { 
    backgroundColor: '#1E6738', 
    width: "100%",
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
   },
  
});
