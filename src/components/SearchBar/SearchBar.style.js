import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../themes/palettes";


const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        width: width,
        marginLeft: width * 0.125,
        marginTop: width*0.05,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: theme.cardBg,
    },
    input: {
        marginLeft: width * 0.05,
        marginVertical: width * 0.01,
    }
})