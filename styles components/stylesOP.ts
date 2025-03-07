import { StyleSheet } from "react-native";

const stylesOP = StyleSheet.create({
  ordersContainer: {
    flex: 1,
    backgroundColor: "rgb(251, 250, 251)",
  },

  orderHeaderContainer: {
    backgroundColor: "rgb(251, 250, 251)",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  orderHeaderTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },

  emptyOrderText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },

  orderCard: {
    backgroundColor: "rgb(252, 252, 252)",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  orderIDContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  orderIDText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    color: "rgb(43, 30, 98)",
  },

  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 8,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
  },

  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "contain",
  },

  itemDetails: {
    marginLeft: 20,
    width: '100%',
    flex: 1,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgb(43, 30, 98)",
  },

  quantityText: {
    fontSize: 14,
    color: "#555",
  },

  bottomBarOP: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    marginRight: 10,
    width: "100%",
  },

  totalPriceText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 10,
  },

  cancelButton: {
    backgroundColor: "rgb(160, 15, 15)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "rgb(248, 246, 254)",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContainer: {
    width: "80%",
    backgroundColor: "rgb(19, 19, 30)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 10, 
  },

  yesNoButtons: {
    flexDirection: 'row',
    width: "60%",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalText: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
    color: "rgb(224, 224, 233)",
  },

  modalButton: {
    backgroundColor: "rgb(83, 62, 176)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
  },

  modalButtonText: {
    fontSize: 16,
    color: "rgb(244, 244, 247)",
    fontWeight: 'bold',
  },
});

export default stylesOP;
