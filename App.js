/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Modal,
  Pressable
} from 'react-native';

const App = () => {

  const [tasks, setTasks] = useState([
    {"index": "0", "todo": "Dire bonjour", "done": false, "editable": false},
    {"index": "1", "todo": "Dire au revoir", "done": false, "editable": false},
    {"index": "2", "todo": "Dire voila", "done": false, "editable": false}
  ])

  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const textToDo = "A faire";
  const textDone = "Fait";
  const textEdit = "Editer";
  const textSave = "Sauvegarder";

  /**
   * Methode qui gere l edition de tache
   * 
   * @param {*} task 
   */
  const handleEdit = (task) => {
    /* rend le champs editable */
    task.editable = !task.editable;

    /* modifie la tache a faire */
    changeTask(task);

    /* met a jour l affichage */
    setDisplay(!display);
  }

  /**
   * Methode qui modifie le texte de la tache a modifier
   * 
   * @param {*} task 
   */
  const changeTask = (task) => {

    if(text != ""){
      task.todo = text;
      setText("");
    }
  }

  /**
   * Methode qui recupere la tache dans le tableau de taches
   * a partir d un index
   * 
   * @param {*} index 
   */
  const handlePress = (index) => {
    const task = tasks.slice(parseFloat(index), parseInt(index) + 1);
    handleTask(task);
  }

  /**
   * Methode qui gere si la tache a été réalisé ou non
   * 
   * @param {*} task 
   */
  const handleTask = (task) => {
    task[0].done = !task[0].done;
    setDisplay(!display);
  }

  /* Affichage en console pour verifier les changements */
  useEffect(() => {
    console.log(tasks);
  }, [display])

  return(

    <View>
      {/* Affichage des taches */}
      <View>
        {tasks.map((task) => {
          return(
            <View key={task.index}>

              {/* Affichage de la tache */}
              <TextInput
                onChangeText={(text) => setText(text)}
                editable={task.editable}
              >
                {task.todo}
              </TextInput>

              {/* Bouton d edition */}
              <Button 
                onPress={() => handleEdit(task)} 
                /* !task.editable car false par defaut */
                title={!task.editable ? textEdit : textSave}/>

              {/* Bouton tache faite ou non */}
              <Button 
                onPress={() => handlePress(task.index)} 
                title={task.done ? textDone : textToDo}/>

            </View>
          )
        })}
      </View>

      {/* Affichage de la modal d ajout */}
      <View>

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View>
            <Text>Hello world !</Text>
          </View>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
            title="Hide Modal"/>
        </Modal>

        <Button
          onPress={() => setModalVisible(true)}
          title="Open Modal"/>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
