import React, {useState, useRef} from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import stylesHP from "../styles components/stylesHP";

const HomePage = () => {
    return (
        <View style={stylesHP.mainContainer}>
            <ScrollView style={stylesHP.scrollContainer}>
                <View>
                    <Text style={stylesHP.headerText}>
                        THIS IS THE HOMEPAGE
                    </Text>
                </View>

                <View>
                    CONTENTS SECTION
                </View>

                <View style={stylesHP.taskBar}>
                    <Text>
                        PLACEHOLDER
                    </Text>
                </View>
                
            </ScrollView>
        </View>
    );
};

export default HomePage;
