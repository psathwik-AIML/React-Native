import { View, Text, StyleSheet } from 'react-native'
export default function StyleSheetApi() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>StyleSheetApi</Text>
            <Text style={styles.text2}>coding is fun</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:100, 
        backgroundColor:"#322"
    },
    text:{
        fontSize:30,
        color:"lightgreen",
        fontWeight:700
    },
    text2:{
        fontSize:24,
        color:"red",
        fontWeight:600
    }
})