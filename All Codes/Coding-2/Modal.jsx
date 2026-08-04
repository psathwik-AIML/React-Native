import { View, Text, Modal, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

// modal is some data that overlays our screen 
export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <View style={{ flex: 1, padding: 70 }}>
      <Text>ModalComponent</Text>
      <Button title="open modal" color="green" onPress={() => setOpen(true)} />
      <Modal  visible={open} animationType='fade' presentationStyle='pageSheet'>
        <View style={{ backgroundColor: "#ebb69d",width:300,margin:30,padding:40}}>
          <Text style={{textAlign:"center",fontSize:20,fontWeight:600,color:"blue"}}>Iam Modal</Text>
          <Text>Happy Coding. I am a Coder</Text>
          <Pressable onPress={() => setOpen(false)}>
            <Text style={{backgroundColor:"red",textAlign:"center",marginTop:10,color:"#fff",padding:10,marginLeft:60,width:150}}>CLOSE MODAL</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}