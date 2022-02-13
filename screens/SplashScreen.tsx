import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useFonts, Almendra_400Regular } from "@expo-google-fonts/almendra";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "~/types";
import { Title } from "~/components/Title";

export function clean(item: object): any {
  for (let [key, value] of Object.entries(item)) {
    if (key === "bm" && value > 15) {
      item.bm = 0;
    } else if (Array.isArray(value)) {
      let remove = [];
      for (let subItem of value) {
        if (subItem?.ty === "op") {
          remove.push(subItem);
          continue;
        }
        clean(subItem);
      }
      for (let del of remove) {
        value.splice(value.indexOf(del), 1);
      }
    } else if (typeof value === "object" && value) {
      clean(value);
    }
  }
  return item;
}

export default function SplashScreen({
  navigation,
}: RootStackScreenProps<"SplashScreen">) {
  let [fontsLoaded] = useFonts({ Almendra_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Title fontSize={40} />
      <View style={styles.separator} />
      <LottieView
        source={clean(require("../assets/images/sword.json"))}
        autoPlay
        speed={4}
        loop={false}
        onAnimationFinish={() => navigation.navigate("Root")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C0C0C",
  },
  title: {
    fontSize: 40,
    color: "rgba(255,255,255,0.8)",
    fontFamily: "Almendra_400Regular",
  },
  separator: {
    marginVertical: 60,
    height: 1,
  },
});
