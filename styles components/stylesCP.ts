import { StyleSheet } from "react-native";

const stylesCP = StyleSheet.create({

  cartContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  backButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },

  cartTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },

  cartItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  removeButton: {
    backgroundColor: "#FF5733",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  checkoutButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default stylesCP;
