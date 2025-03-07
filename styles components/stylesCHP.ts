import { StyleSheet } from "react-native";

const stylesCHP = StyleSheet.create({
  checkOutContainer: {
    flex: 1,
    backgroundColor: "rgb(251, 250, 251)",
  },

  headerContainerCHP: {
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

  titleTextCHP: {
    fontSize: 30,
    fontWeight: "bold",
  },

  emptyCartText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },

  checkOutItem: {
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

  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(43, 30, 98)",
  },

  quantityText: {
    fontSize: 14,
    color: "#555",
  },

  bottomBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
    height: 120,
    justifyContent: "flex-start",
  },
  
  bottomBarContents: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
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

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: 250,
    height: 180,
    backgroundColor: "rgb(19, 19, 30)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalIconCheckCHP: {
    color: "rgb(244, 244, 247)",
    fontSize: 50,
  },

  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(244, 244, 247)",
    marginTop: 10,
  },

  okButton: {
    marginTop: 15,
    backgroundColor: "rgb(83, 62, 176)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  okButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default stylesCHP;
