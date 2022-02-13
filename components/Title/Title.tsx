import { Text } from "react-native";
import { ReactNode } from "react";
import { useFonts, Almendra_400Regular } from "@expo-google-fonts/almendra";
import AppLoading from "expo-app-loading";

interface TitleProps {
  fontSize: number;
  children?: ReactNode;
}

export function Title({ children = "Longsword", fontSize }: TitleProps) {
  let [fontsLoaded] = useFonts({ Almendra_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text
      style={{
        fontSize,
        color: "rgba(255,255,255,0.8)",
        fontFamily: "Almendra_400Regular",
      }}
    >
      {children}
    </Text>
  );
}
