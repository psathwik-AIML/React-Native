// Date: Aug 1 2026 
import { View, Text, Image,Pressable} from 'react-native'
import tiger from '../../assets/tiger.jpg'
import rose from '../../assets/rose.avif'
// by using pressable component we can create our own button actions 
export default function PressableComponent() {

  return (
    <View style={{ flex: 1, backgroundColor: "orange",padding:60 }}>
      <Pressable onPress={()=>alert("text is pressed")}>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nam?</Text>
      </Pressable>
      <Pressable onPress={()=>alert("image tiger is pressed")}>
      <Image source={tiger} style={{width:200,height:200,margin:40}}/>
      </Pressable>
      <Image source={rose} style={{width:200,height:200,margin:40}}/>
    </View>
  )
}