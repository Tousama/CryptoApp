import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        backgroundColor: theme.bg,
    },
    info: {
        flexDirection: "row",
        marginBottom: width * 0.01,
    },
    asks: {
        width: width * 0.625,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    bids: {
        width: width * 0.625,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "600",
        marginVertical: width * 0.05,
    },
    innerContainer: {
        flexDirection: "row",
    },
});