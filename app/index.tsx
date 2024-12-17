import { Text, View } from "react-native";
import { StatusBar

 } from "expo-status-bar";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ahem ahem</Text>
      <StatusBar style="auto"/>
    </View>
  );
}
