import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get("window").width*0.4;

export default StyleSheet.create({
    container: {
        width: width,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.125,
        alignItems: "center",
        backgroundColor: theme.cardBg,
    },
    price: {
        paddingTop: width * 0.03,
        fontSize: 16,
        fontWeight: "600",
    },
    qty: {
        paddingBottom: width * 0.03,
        fontSize: 16,
        fontWeight: "500",
        color: "gray"
    }
});