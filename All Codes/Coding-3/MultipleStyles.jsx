import { View, Text,StyleSheet } from 'react-native'
export default function MultipleStyles() {
  return (
    <View style={styles.container}>
      <View style={[styles.box,styles.box1]}>
      <Text>Box 1</Text>
      </View>
      <View style={[styles.box,styles.box2]}>
      <Text>Box 2</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"plum",
        flex:1,
        padding:50
    },
    box:{
        width:100,
        height:100,
        padding:20
    },
    box1:{
        backgroundColor:"#f6a849"
    },
    box2:{
        backgroundColor:"lightgreen"
    }
})
