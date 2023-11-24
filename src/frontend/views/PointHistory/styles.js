import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  title: {
    backgroundColor: "#ffffff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 50,
    paddingLeft: 15,
    paddingBottom: 100,
  },
  text: {
    fontSize: 30,
  },
  dateInputContainer: {
    padding: 10,
    flexDirection: "row", 
    alignItems: "center", 
  },
  dateInput: {
    /* flex: 1, */
    margin: 5, 
   
  },
  searchBar: {
    padding: 10,
    flexDirection: "row", 
    alignItems: "center",
  },
  nameInput: {
    /* margin: 5, */
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "#B2BEB5",
  },
  dayLabel: {
    marginTop: 10,
    width: 420,
    borderBottomWidth: 1,
    borderBottomColor: "#B2BEB5"
  },
  hourRegisted: {
    marginTop: 5,
    color: "gray"
  },
  pageChange: {
    position: "relative",
    alignContent: "center",
  },
  pageChangeCotent: {
    position: "absolute",
    backgroundColor: "green",
    gap: 20,
    padding: 10,
    flexDirection: "row",
    borderRadius: 100,
    position: "absolute",
    top: 50,
    zIndex: 1,
  },
  iconsPages: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});
