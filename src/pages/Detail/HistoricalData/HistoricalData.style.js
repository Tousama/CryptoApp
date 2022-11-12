import { Dimensions, StyleSheet } from 'react-native';
import { theme } from "../../../themes/palettes";

const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        backgroundColor: theme.bg,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        marginTop: width * 0.05,
        paddingBottom: width * 0.025,
    }
});

