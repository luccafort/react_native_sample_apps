// Style
import {
  StyleSheet,
} from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    backgroundColor: "#afeeee",
    height: 50,
  },
  headerText: {
    color: "#fffcdb",
    fontSize: 20,
    marginTop: 5,
  },
  leftButton: {
    color: "#fffcdb",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 5,
  },
  itemContainer: {
    backgroundColor: "rgb(255, 255, 250)",
    alignSelf: "stretch",
    padding: 10,
    borderLeftColor: "#afeeee",
    borderLeftWidth: 5,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0.8,
      height: 0.8,
    },
  },
  itemTitle: {
    color: "rgb(50, 50, 50)",
    fontSize: 20,
  },
  itemDescription: {
    color: "rgb(83, 83, 83)",
  }
});

module.exports = Style;