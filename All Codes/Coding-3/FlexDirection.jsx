import { View, Text,StyleSheet } from 'react-native'
import Box from '../../components/Box'
export default function FlexDirection() {
  return (
   <View style={styles.container}>
               <Box style={{ backgroundColor: "orange"}}>Box 1</Box>
               <Box style={{ backgroundColor: "purple" }}>Box 2</Box>
               <Box style={{ backgroundColor: "lightgreen"}}>Box 3</Box>
           </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:5,
        borderColor:"red",
        flexDirection:"column-reverse"
    }
})