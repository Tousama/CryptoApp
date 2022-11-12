import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../themes/palettes";

const width = Dimensions.get("window").width*0.4;
 
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
    },
    title: {
        fontSize: 24, 
        textAlign: "center", marginTop: 20,
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        borderWidth: 1,
        width: width,
        left: width*0.75,
        height: width*0.25,
        justifyContent: "center",
        borderRadius: 10,
        marginBottom: width*0.15,
        backgroundColor: theme.cardBg,
    }
});