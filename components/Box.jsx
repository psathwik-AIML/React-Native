import { View, Text,StyleSheet } from 'react-native'
export default function Box({children,style}) {
  return (
    <View style={[styles.box,style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    box:{
        padding:10,
    },
    text:{
        fontWeight:"bold",
        fontSize:24,
        textAlign:"center",
        color:"#fff"
    }
})