import { StyleSheet } from "react-native";

const stylesHP = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    scrollContainer: {
        backgroundColor: 'blue',
    },

    headerText: {
        color: 'pink',
        fontSize: 100,
    },

    taskBar: {
        backgroundColor: 'black',
        width: '100%',
        flex: 1,
        height: 300,
        borderRadius: 20,
    }
});

export default stylesHP;