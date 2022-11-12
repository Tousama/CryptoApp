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
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.cardBg,
    },
    title: {},
    innerContainer: {
        alignItems: "center",
    },
    symbol: {
        fontSize: 16,
        fontWeight: "600",
    },
    lastPrice: {
        fontSize: 16,
        fontWeight: "500",
    },
    priceChange: {
        fontSize: 16,
    },
    lastQty: {
        fontSize: 16, 
        color: "gray",
    },
    bidPrice: {
        fontSize: 16,
        color: "red",
    },
    bidQty: {
        fontSize: 16,
        color: "gray",  
    },
    askPrice: {
        fontSize: 16,
        color: "green",
    },
    askQty: {
        fontSize: 16,
        color: "gray",
    },
    highPrice: {
        fontSize: 16,
        color: "green",
    },
    lowPrice: {
        fontSize: 16,
        color: "red",
    },
    volume: {
        fontSize: 16,
    },
    count: {
        fontSize: 16,
    },
    time: {
        fontSize: 16,
        color: "gray"
    }
});

