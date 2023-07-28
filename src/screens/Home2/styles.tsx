import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20
  },
  sub_container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    marginBottom: 50
    // backgroundColor: '#f0f0f0',
  },
  schedule_container: {
    padding: 16,
  },
  schedule_item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.inputLabel
  },
  time: {
    fontSize: 16,
    color: Colors.inputLabel,
  },
  add_button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
    position: "absolute",
    bottom: 10,
    alignSelf: "center"
  },
  add_button_text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal_container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    color: Colors.inputLabel,
  },
  container_view: {
    // flex: 1,
    // paddingHorizontal: 26,
    // paddingTop: 30,
    // backgroundColor: Colors.white,
  },
  container_view_2: {
    marginVertical: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
  },
  heading: {
    fontSize: 20,
    color: Colors.lightBlack,
    textAlign: "left",
    opacity: 1,
  },
  description: {
    color: Colors.lightBlack,
    textAlign: "left",
    fontSize: 12,

  },
  user_icon_container: {
    height: 40,
    width: 40,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  user_icon: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },

});