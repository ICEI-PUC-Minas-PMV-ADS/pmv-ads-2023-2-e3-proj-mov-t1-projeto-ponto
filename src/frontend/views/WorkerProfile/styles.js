import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "auto",
    height: "auto",
  },
  workerpic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "stretch",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B4744",
    width: "auto",
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  body: {
    gap: 20,
    alignItemsn: "center",
  },
  pageChange: {
    position: "relative",
    alignItems: "center",
  },
  pageChangeCotent: {
    position: "absolute",
    backgroundColor: "#1B4744",
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
