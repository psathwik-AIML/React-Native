import { View, Text, StyleSheet } from 'react-native'
import Box from '../../components/Box'
export default function FlexBox() {
    return (
        <View style={styles.container}>
            <Box />
            <Box style={{ backgroundColor: "orange",flex:1}}>Box 1</Box>
            <Box style={{ backgroundColor: "purple" }}>Box 2</Box>
            <Box style={{ backgroundColor: "lightgreen",flex:2 }}>Box 3</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:5,
        borderColor:"red",
    }
})