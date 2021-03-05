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
import { AddModal } from './components/AddModal';
import { Task } from './components/Task';

const App = () => {

  const [tasks, setTasks] = useState([
    {"index": "0", "todo": "Dire bonjour", "done": false, "editable": false},
    {"index": "1", "todo": "Dire au revoir", "done": false, "editable": false},
    {"index": "2", "todo": "Dire voila", "done": false, "editable": false}
  ])

  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

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
            <Task 
              key={task.index}
              task={task}
              handleEdit={handleEdit} 
              handlePress={handlePress}
              setText={setText}
              />
          )
        })}
      </View>

      {/* Affichage de la modal d ajout */}
      <AddModal/>

    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
