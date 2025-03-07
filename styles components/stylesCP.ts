import { StyleSheet } from "react-native";

const stylesCP = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "rgb(251, 250, 251)",
  },

  headerContainerCP: {
    backgroundColor: "rgb(251, 250, 251)",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  titleTextCP: {
    fontSize: 30,
    fontWeight: "bold",
  },

  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },

  cartItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 10,
    resizeMode: "contain",
  },

  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },

  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(43, 30, 98)",
  },

  quantityAdjuster: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgb(43, 30, 98)",
    borderRadius: 5,
    marginHorizontal: 5,
  },

  quantityText: {
    fontSize: 18,
    fontWeight: 500,
    marginHorizontal: 5,
    minWidth: 20,
    textAlign: 'center',
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  bottomBarRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  selectAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectAllText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  totalPriceText: {
    fontSize: 16, 
    fontWeight: "bold",
  },

  checkoutButton: {
    backgroundColor: "rgb(43, 30, 98)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  disabledButton: {
    backgroundColor: "rgb(178, 174, 182)",
  },

  buttonText: {
    color: "rgb(248, 246, 254)",
    fontSize: 16,
    fontWeight: 700,
  },
});

export default stylesCP;
