import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get('window').width*0.8;
export default StyleSheet.create({
    container: {
        width: width,
        marginLeft: width * 0.125,
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        padding: width * 0.05,
        borderWidth:1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.cardBg,
    },
    stockName: {
        fontSize: 24,
        fontWeight: "800",
        paddingBottom: 3,
    },
    stockPrice: {
        fontSize: 16,
        fontWeight: "300",
    },
    stockChangePercentGreen: {
        color: "green"
    },
    stockChangePercentRed: {
        color: "red"
    },
    stockChangePercent: {},
    stockVolume: {},
    stockTime: {},
});