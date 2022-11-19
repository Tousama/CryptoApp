import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../themes/palettes";

const width = Dimensions.get("window").width * 0.4;

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
    buttonContainer: {
        marginBottom: width * 0.3,
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        borderWidth: 1,
        width: width,
        marginHorizontal: width * 0.125,
        height: width * 0.275,
        justifyContent: "center",
        borderRadius: 10,
        marginTop: width * 0.1,
        backgroundColor: theme.cardBg,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
    }
});