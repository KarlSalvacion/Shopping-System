import { StyleSheet } from "react-native";

const stylesGlobal = StyleSheet.create({
    safeAreaContainer: {
        backgroundColor: "rgb(251, 250, 251)",
        flex: 1,
    },

    tabBarStyle: {
        backgroundColor: "rgb(25, 24, 29)", 
        height: 80, 
        width: "100%",
        marginHorizontal: 20,
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        alignSelf: 'center'
    },

    tabBarLabelStyle: {
        marginTop: 5,
    },

    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        width: 50,
        height: 50,
    },

    activeIconContainer: {
        backgroundColor: "rgb(248, 246, 254)",
        borderRadius: 25, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

export default stylesGlobal;
