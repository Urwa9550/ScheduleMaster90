import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    content_container: {
        flex: 1,
        marginHorizontal: 20,
    },
    welcome_text: {
        marginTop: 100,
        textAlign: "center",
        color: Colors.primaryBlue,
        fontSize: 32,
    },
    text_input_container: {
        marginTop: 30,
    },
    forgot_password_text: {
        color: Colors.primaryBlue,
        textAlign: "right",
        paddingHorizontal: 20,
        fontSize: 12,
        marginTop: 20,
    },
    buttonContainer: {
        width: '100%',
        // flex:0.2,
        // alignSelf: "center",
        marginTop: 30,
    },
    signup_text: {
        fontSize: 13,
        textAlign: "center",
        color: Colors.gray,
    },
    signup_link_text: {
        color: Colors.primaryBlue,
        alignItems: "center",
        fontSize: 13,
    },
    signup_label: {
        // alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        flexDirection: "row"
    },
    image_container_bottom: {
        flex: 1,
        zIndex: -1,
        paddingBottom: 220,
        justifyContent: "flex-end",
    },
    image_bottom: {
        width: "100%",
        resizeMode: "contain",
        position: "absolute",
        top: 95,
    },
    error_text: {
        color: 'red',
        marginBottom: 10,
    },
});
