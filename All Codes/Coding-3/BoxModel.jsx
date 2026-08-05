import { View, Text,StyleSheet } from 'react-native'

export default function BoxModel() {
  return (
    <View style={styles.container}>
      <View style={[styles.box,styles.box1]}>
        <Text>Normal</Text>
      </View>
      <View style={[styles.box,styles.box2]}>
        <Text>Box Model</Text>
      </View>
      <View style={[styles.box,styles.box3]}>
        <Text>Normal</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#718797",
        flex:1,
        padding:50
    },
    box:{
        width:100,
        height:100,
    },
    box1:{
        backgroundColor:"#f6a849",
        marginTop:40
    },
    box2:{
        backgroundColor:"lightgreen",
        paddingHorizontal:30,
        paddingVertical:30,
        marginVertical:30,
        marginHorizontal:30,
        borderWidth:5,
        borderColor:"red",
        borderStyle:"solid",
        width:"100%",
        height:"40%",
        borderRadius:80
    },
    box3:{
        backgroundColor:"pink",
    }
})