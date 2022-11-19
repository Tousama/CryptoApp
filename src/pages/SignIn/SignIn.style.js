import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("window").width * 0.4;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cdcdcd",
    },
    topContainer: {
        flex: 1,
    },
    title: {
        position: "relative",
        top: "50%",
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
    },
    bottomContainer: {
        flex: 2,
        backgroundColor: "#ababab",
        borderWidth: 1,
        borderColor: "transparent",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    mailText: {
        fontSize: 22,
        fontWeight: "500",
        marginVertical: width * 0.1,
        marginHorizontal: width * 0.1,
    },
    mailContainer: {
        marginHorizontal: width * 0.1,
        flexDirection: "row",
        alignItems: "center"
    },
    mailInput: {
        borderWidth: 1,
        marginHorizontal: width * 0.025,
        borderRadius: 10,
        paddingLeft: 10,
        height: width * 0.25,
        width: width * 2,
    },
    passwordText: {
        fontSize: 22,
        marginHorizontal: width * 0.1,
        fontWeight: "500",
        marginVertical: width * 0.1,
    },
    passwordContainer: {
        marginHorizontal: width * 0.1,
        flexDirection: "row",
        alignItems: "center"
    },
    passwordInput: {
        borderWidth: 1,
        marginHorizontal: width * 0.025,
        borderRadius: 10,
        width: width * 2,
        paddingLeft: 10,
        height: width * 0.25,
    },
    signInButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        marginTop: width * 0.3,
        left: width * 1.25,
        width: width,
        height: width * 0.25,
        justifyContent: "center",
        alignItems: "center",
    },
    signInButtonText: {
        fontSize: 16,
        fontWeight: "500",
    }
});