
import { View, Text,Image} from 'react-native'
import React from 'react'
import tiger from '../../assets/tiger.jpg'
export default function App() {
  return (
    <View style={{flex:1,padding:100}}>
      {/* local /static image  */}
      <Image source={tiger} style={{width:100,height:100}}/>
      {/* internet image we should use uri inside source */}
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl9zC2HErsCu-9Z0_IcPwl6EFHcW2LQTnpMEP_Wr5Mt9SIoxQrBCS287r&s=10"}} style={{width:300,height:300,marginLeft:-80,marginTop:30}}/>
    </View>
  )
}