import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export const Task = (props) => {

  const task = props.task;

  const textToDo = "A faire";
  const textDone = "Fait";
  const textEdit = "Editer";
  const textSave = "Sauvegarder";

    return (
        <View key={task.index}>

              {/* Affichage de la tache */}
              <TextInput
                onChangeText={(text) => props.setText(text)}
                editable={task.editable}
              >
                {task.todo}
              </TextInput>

              {/* Bouton d edition */}
              <Button 
                onPress={() => props.handleEdit(task)} 
                /* !task.editable car false par defaut */
                title={!task.editable ? textEdit : textSave}/>

              {/* Bouton tache faite ou non */}
              <Button 
                onPress={() => props.handlePress(task.index)} 
                title={task.done ? textDone : textToDo}/>

            </View>
    )
}
