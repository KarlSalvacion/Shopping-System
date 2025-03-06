import { StyleSheet } from "react-native";

const stylesHP = StyleSheet.create({

  homepageContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },

  rowContainer: {
    justifyContent: "space-between",
  },

  productContainerHP: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  singleItemHP: {
    flex: 0.45, 
    alignSelf: "flex-start",
  },

  imgProductHP: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  productPrice: {
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
  },

  productRating: {
    fontSize: 14,
    color: "#ffcc00",
    marginBottom: 10,
  },

  starIcon: {
    fontSize: 14,
  },

  addButton: {
    backgroundColor: "#007AFF",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },

  buttonContainer: {
    alignItems: "center",
    marginVertical: 15,
  },

  button: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default stylesHP;
