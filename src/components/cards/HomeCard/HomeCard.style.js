import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get('window').width*0.35;

export default StyleSheet.create({
    container: {
        width: width,
        marginLeft: Dimensions.get("window").width*0.1,
        marginTop: width*0.2,
        padding: width*0.15,
        borderWidth:1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.cardBg, 
    },
    stockName: {
        fontSize: 18,
        fontWeight: "600",
        paddingBottom: 3,
    },
    stockPrice: {
        fontSize: 16,
        fontWeight: "300",
    }
});