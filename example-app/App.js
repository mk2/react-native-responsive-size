import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RSize } from "react-native-simple-responsive-size";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  box1: {
    width: RSize(100),
    height: RSize(100),
    backgroundColor: "red",
  },
  box2: {
    width: RSize(200),
    height: RSize(100),
    backgroundColor: "green",
  },
  box3: {
    width: RSize(100),
    height: RSize(200),
    backgroundColor: "blue",
  },
});
