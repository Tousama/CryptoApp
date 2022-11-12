import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../themes/palettes";

const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
    },
    text: {
        flexDirection: "row",
        marginTop: width * 0.05,
        /* justifyContent: "space-around", */
    },
    filterText: {
        marginLeft: width * 0.125,
        fontSize: 16,
    },
    filterLength: {
        marginLeft: width * 0.1,
        fontSize: 16,        
    }
});