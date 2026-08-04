// inorder to display text we need to use text component 
import { View, Text } from 'react-native'
export default function TextComponent() {
  return (
    <View style={{flex:1,backgroundColor:"lightpink",padding:80}}>
      <Text style={{fontSize:30}}>Hello World</Text>
      <Text style={{fontSize:25,color:"red"}}>Happy Coding</Text>
    </View>
  )
}