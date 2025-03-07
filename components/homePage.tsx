import React, { useState, useRef } from "react";
import { View, Text, FlatList, Image, Pressable, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { products } from "../data/products";
import { useCart } from "./cartContext";
import stylesHP from "../styles components/stylesHP";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { RootStackParamList } from "./navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { useFonts } from "expo-font";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Product = {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: number;
};

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { cart, addToCart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const flatListRef = useRef<FlatList<Product | null>>(null);

    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const scaleAnim = useRef(new Animated.Value(0)).current;

    const [cartModalVisible, setCartModalVisible] = useState(false);
    const cartModalAnim = useRef(new Animated.Value(0)).current;

    const handleAddToCart = (product: Product) => {
        addToCart(product, 1);

        setCartModalVisible(true);
        Animated.timing(cartModalAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            Animated.timing(cartModalAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setCartModalVisible(false));
        }, 1300);
    };

    const scrollToTop = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
        }
    };

    const [fontsLoaded] = useFonts({
        "JosefinSansSB": require("../assets/Josefin_Sans/static/JosefinSans-Bold.ttf"),
        "LexendB": require("../assets/Lexend/Lexend-Bold.ttf"),
        "LexendSB": require("../assets/Lexend/Lexend-SemiBold.ttf"),
        "LexendM": require("../assets/Lexend/Lexend-Medium.ttf"),
    });
  
    const getProcessedProducts = () => {
        const productList = [...products];
        if (productList.length % 2 !== 0) {
            productList.push(null as unknown as Product);
        }
        return productList;
    };

    const openImageModal = (image: number) => {
        setSelectedImage(image);
        setModalVisible(true);
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 10,
        }).start();
    };

    const closeImageModal = () => {
        Animated.timing(scaleAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setModalVisible(false);
            setSelectedImage(null);
        });
    };

    const renderItem = ({ item }: { item: Product | null }) => {
        if (!item) {
            return <View style={stylesHP.blankContainerHP} />;
        }

        return (
            <View style={stylesHP.productContainerHP}>
                <Pressable onPress={() => openImageModal(item.image)} style={stylesHP.imagePressable}>
                    <Image source={item.image} style={stylesHP.imgProductHP} />
                </Pressable>

                <View style={stylesHP.detailsContainer}>
                    <Text style={stylesHP.productName}>{item.name}</Text>
                    <Text style={stylesHP.productPrice}>
                        ₱{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                    <Text style={stylesHP.productRating}>
                        <AntDesign name="star" style={stylesHP.filledStarIcon} /> {item.rating}
                    </Text>
                    <Pressable style={stylesHP.addButton} onPress={() => handleAddToCart(item)}>
                        <Ionicons name="add-circle-outline" size={20} color="rgb(248, 246, 254)" />
                        <Text style={stylesHP.addButtonText}>Add to Cart</Text>
                    </Pressable>
                </View>
            </View>
        );
    };

    return (
        <View style={stylesHP.homepageContainer}>
            {/* Pressable Header to Scroll to Top */}
            <Pressable style={stylesHP.headerContainer} onPress={scrollToTop}>
                <Text style={stylesHP.brandTitleText}>Declutter</Text>
                <Pressable style={stylesHP.cartIconContainer} onPress={() => navigation.navigate("Cart")}>
                    <Ionicons name="cart" size={28} color="black" />
                    {cartItemCount > 0 && (
                        <View style={stylesHP.cartBadge}>
                            <Text style={stylesHP.cartBadgeText}>{cartItemCount}</Text>
                        </View>
                    )}
                </Pressable>
            </Pressable>

            <FlatList
                ref={flatListRef}
                data={getProcessedProducts()}
                keyExtractor={(item, index) => (item ? item.id : `empty-${index}`)}
                numColumns={2}
                columnWrapperStyle={stylesHP.rowContainer}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />

            {/* Image Preview Modal */}
            {modalVisible && (
                <View style={stylesHP.modalBackground}>
                    <Pressable style={stylesHP.modalCloseArea} onPress={closeImageModal} />
                    <Animated.View style={[stylesHP.modalContainer, { transform: [{ scale: scaleAnim }] }]}>
                        {selectedImage && <Image source={selectedImage} style={stylesHP.modalImage} />}
                        <Pressable style={stylesHP.modalCloseButton} onPress={closeImageModal}>
                            <Text style={stylesHP.modalCloseText}>Close</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            )}

            {/* Cart Notification Modal */}
            {cartModalVisible && (
                <Animated.View style={[stylesHP.cartModal, { opacity: cartModalAnim }]}>
                    <FontAwesome5 name="check-circle" style={stylesHP.modalIconCheck} />
                    <Text style={stylesHP.cartModalText}>Added to cart</Text>
                </Animated.View>
            )}
        </View>
    );
};

export default HomeScreen;
