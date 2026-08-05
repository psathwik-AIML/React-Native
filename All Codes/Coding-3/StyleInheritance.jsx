import { View, Text, StyleSheet } from 'react-native'
export default function StyleInheritance() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.textColor}>StyleInheritance <Text style={styles.coder}>coder</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 100,
        backgroundColor:"plum",
    },   
    box:{
        backgroundColor: "#111",
        padding:20
    },
    textColor:{
        color: "#fff",
    },
    coder:{
        backgroundColor: "#d21a1a",
    } 
})