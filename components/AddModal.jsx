import React, { useState } from 'react'
import { View, Text, Modal, Button } from 'react-native'

export const AddModal = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

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
              <Text>Hello world !</Text>
            </View>
            
            <Button
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
              title="Hide Modal"/>

        </Modal>
        
        {/* Ouverture de la Modal */}
        <Button
          onPress={() => setModalVisible(true)}
          title="Open Modal"/>

        </View>
    )
}
