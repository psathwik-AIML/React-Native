import { View, Text,Button,Alert } from 'react-native'
import React from 'react'

export default function AlertComponent() {
  return (
    <View style={{flex:1,padding:100}}>
      <Text>AlertComponent</Text>
      <Button title="Alert" onPress={()=>Alert.alert("data invalid!","password is wrong",[
        {
            text:"remove",
            onPress:()=>console.log("removed")
        },
        {
            text:"keep",
            onPress:()=>console.log("kept")
        },
        {
            text:"cancel",
            onPress:()=>console.log("cancelled")
        }
      ])}/>
    </View>
  )
}