import { View, Text } from 'react-native'
import Greet from '../../components/Greet'
export default function CustomComponent() {
  return (
    <View style={{padding:100}}>
      <Text>Coding is Fun If u really enjoy it</Text>
      <Greet name="batman"/>
      <Greet name="thor"/>
    </View>
  )
}