import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        width: width,
        marginLeft: Dimensions.get("window").width*0.1,
        marginTop: width*0.05,
        padding: width*0.05,
        borderWidth:1,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: theme.cardBg,
    },
    title: {
        
    },
    innerContainer: {
        alignItems: "center",
    }, 
    openPrice: {
        fontSize: 16,
        color: "#656565",
    },
    highPrice: {
        fontSize: 16,
        color: "green",
    },
    lowPrice: {
        fontSize: 16,
        color: "red",
    },
    closePrice: {
        fontSize: 16,
        color: "#292828",
    },
    time: {
        fontSize: 16,
        color: "gray"
    }
});