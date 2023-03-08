import { Dimensions, StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
const styles = StyleSheet.create({
    container: {
        flex:0.256,
        height: RFValue(170,Dimensions.get('screen').height),
        backgroundColor: "#830ad1",
    },

})

export default styles
