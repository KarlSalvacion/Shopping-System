import React, {useState, useRef} from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import stylesHP from "../styles components/stylesHP";

const HomePage = () => {
    return (
        <View style={stylesHP.mainContainer}>
            <ScrollView style={stylesHP.scrollContainer}>
                <Text style={stylesHP.headerText}>
                    THIS IS THE HOMEPAGE
                </Text>
            </ScrollView>
        </View>
    );
};

export default HomePage;
