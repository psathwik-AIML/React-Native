import { View, Text,StatusBar,Button } from 'react-native'
import React, { useState } from 'react'

export default function StatusBarComponent() {
    const[bar,setBar]=useState(false)
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="green" barStyle={"dark-content"} hidden={bar}/>/
      <Text style={{marginTop:100}}>StatusBarComponent</Text>
      <Button title='toggle' onPress={()=>setBar(!bar)}/>
    </View>
  )
}