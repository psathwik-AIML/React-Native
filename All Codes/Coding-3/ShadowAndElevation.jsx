import { View, Text,StyleSheet } from 'react-native'

// shadows for android and ios diff 
export default function ShadowAndElevation() {
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
        backgroundColor:"#ccc",
        flex:1,
        padding:50
    },
    box:{
        width:100,
        height:100,
    },
    box1:{
        backgroundColor:"#f6a849",
        marginBottom:40,
        // for ios 
        shadowOpacity:0.6,
    },
    box2:{
        elevation:10,
        backgroundColor:"lightgreen",
    }
})