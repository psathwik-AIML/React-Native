
import { View, Text,ImageBackground} from 'react-native'
export default function App() {
    console.log("images")
  return (
    <View style={{flex:1}}>
        <ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl9zC2HErsCu-9Z0_IcPwl6EFHcW2LQTnpMEP_Wr5Mt9SIoxQrBCS287r&s=10"}} style={{flex:1,padding:70}}>
        <Text style={{color:"gold",fontSize:30}}>Hello Tom</Text>
        <Text style={{color:"gold",fontSize:30}}>Hello Jerry</Text>
        </ImageBackground>
    </View>
  )
}