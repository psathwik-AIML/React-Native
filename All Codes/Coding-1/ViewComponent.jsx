// view is a container that hold some other stuff just like div in web 
import { View } from 'react-native'
export default function ViewComponent() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum",padding:100 }}>
            <View style={{backgroundColor: "gold",width:100,height:100 }}>
            </View>
            <View style={{backgroundColor: "orange",width:100,height:100 }}>
            </View>
        </View>
    )
}
