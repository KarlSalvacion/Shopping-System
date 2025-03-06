import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { products } from "../data/products";
import { useCart } from "./cartContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigationTypes";
import stylesHP from "../styles components/stylesHP";
import { Ionicons, AntDesign  } from "@expo/vector-icons";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Product = {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
};

const HomeScreen = () => {
const { addToCart } = useCart();
const navigation = useNavigation<HomeScreenNavigationProp>();

const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    alert("Item added to cart successfully!");
};

const renderItem = ({ item, index }: { item: Product; index: number }) => {
    const isLastItem = index === products.length - 1 && products.length % 2 !== 0;

    return (
    <View style={[stylesHP.productContainerHP, isLastItem ? stylesHP.singleItemHP : null]}>
        <Image source={{ uri: item.image }} style={stylesHP.imgProductHP} />
        <Text style={stylesHP.productName}>{item.name}</Text>
        <Text style={stylesHP.productPrice}>${item.price}</Text>
        <Text style={stylesHP.productRating}> <AntDesign name="staro" style={stylesHP.starIcon}/> {item.rating}</Text>
        <Pressable style={stylesHP.addButton} onPress={() => handleAddToCart(item)}>
            <Text>Add to Cart</Text>
            <Ionicons name="add-circle" size={24} color="white" />
        </Pressable>
    </View>
    );
};

    return (
        <View style={stylesHP.homepageContainer}>
            <View style={stylesHP.buttonContainer}>
            <Pressable style={stylesHP.button} onPress={() => navigation.navigate("Cart")}>
            <Text style={stylesHP.buttonText}>Go to Cart</Text>
            </Pressable>
            </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={stylesHP.rowContainer}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default HomeScreen;
