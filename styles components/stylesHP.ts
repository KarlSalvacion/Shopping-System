import { StyleSheet } from "react-native";

const stylesHP = StyleSheet.create({

  homepageContainer: {
    flex: 1,
    backgroundColor: "rgb(251, 250, 251)",
  },

  rowContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  headerContainer: {
    backgroundColor: 'rgb(251, 250, 251)',
    height: 100,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  brandTitleText: {
    fontSize: 30,
    fontFamily: 'LexendB'
  },

  cartIconContainer: {
    position: "relative",
  },

  cartBadge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "rgb(219, 38, 56)",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  productContainerHP: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    margin: 5,
    padding: 0, // Remove extra padding to maximize space
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    textAlign: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden", // Ensures the image and content fit neatly
  },

  detailsContainer: {
    width: "100%",
    padding: 10,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },

  productName: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 2,
  },

  productPrice: {
      fontSize: 16,
      fontWeight: "bold",
      color: "rgb(21, 21, 23)",
      marginVertical: 5,
  },

  productRating: {
      fontSize: 14,
      color: "rgb(21, 21, 23)",
      marginBottom: 10,
  },

  filledStarIcon: {
      color: "rgb(65, 53, 137)", // Gold color for a full star
      fontSize: 16,
  },

  blankContainerHP: {
    flex: 1,
    backgroundColor: 'transparent',
    marginHorizontal: 6,
  },

  imagePressable: {
    width: '100%',
  },

  imgProductHP: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    padding: 10,
    backgroundColor: "#fff",
  },

  starIcon: {
    fontSize: 14,
  },

  fullWidthItemHP: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(25, 24, 29)",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },

  addButtonText: {
    color: "rgb(248, 246, 254)",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  modalCloseArea: {
      position: "absolute",
      width: "100%",
      height: "100%",
  },

  modalContainer: {
      backgroundColor: "white",
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
  },

  modalImage: {
      width: 300,
      height: 300,
      resizeMode: "contain",
  },

  modalCloseButton: {
      marginTop: 10,
      paddingVertical: 8,
      paddingHorizontal: 20,
      backgroundColor: "rgb(25, 24, 29)",
      borderRadius: 8,
  },

  modalCloseText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
  },

  cartModal: {
    position: "absolute",
    bottom: 300,
    alignSelf: "center",
    backgroundColor: "rgb(19, 19, 30)",
    padding: 15,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    gap: 10,
  },

  cartModalText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
  },

  cartModalSubtext: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  modalIconCheck: {
    color: 'white',
    fontSize: 50,
  },
});

export default stylesHP;