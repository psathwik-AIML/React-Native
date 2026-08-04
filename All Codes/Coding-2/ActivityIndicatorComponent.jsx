import { View, Text,ActivityIndicator,Button } from 'react-native'
import React, { useState } from 'react'

export default function ActivityIndicatorComponent() {
    const[load,setLoad]=useState(false)
  return (
    <View style={{flex:1,padding:100}}>
      <Text>ActivityIndicatorComponent</Text>
      <ActivityIndicator/>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" color="red"/>
      <ActivityIndicator size="large" color="gold" animating={load}/>
      <Button title="load" onPress={()=>setLoad(!load)}/>
    </View>
  )
}