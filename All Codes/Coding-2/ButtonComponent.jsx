import { View, Text,Button} from 'react-native'
// in react native we use onpress instead of onclick 
// and it self closing 
export default function ButtonComponent() {
  return (
    <View style={{flex:1,padding:100}}>
      <Text style={{marginTop:40,color:"blue",fontSize:30}}>Hello</Text>
      <Button title="click me!" color="red" onPress={()=>console.log("button activated")}/>
    </View>
  )
}