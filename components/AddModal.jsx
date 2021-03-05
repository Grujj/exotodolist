import React, { useState } from 'react'
import { View, Text, Modal, Button, TextInput } from 'react-native'

export const AddModal = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState("");

    const textAddTask = "Ajouter une tâche";
    const textBack = "Retour";
    const textSave = "Sauvegarder";

    const handlePress = () => {
        console.log(text);
    }

    return (
        <View>
            <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>

            {/* Contenu de la Modal */}
            <View>
                <TextInput
                    onChangeText={(text) => setText(text)}
                >
                    Hello World
                </TextInput>
                <Button 
                    title={textSave}
                    onPress={handlePress}/>
            </View>

            <Button
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
              title={textBack}/>

        </Modal>
        
        {/* Ouverture de la Modal */}
        <Button
          onPress={() => setModalVisible(true)}
          title={textAddTask}/>

        </View>
    )
}
