import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Colors from "~/constants/Colors";
import useColorScheme from "~/hooks/useColorScheme";
import { useNavigation } from "@react-navigation/native";

export function InfoButton() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Modal")}
      testID="info-button"
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome
        name="info-circle"
        size={25}
        color={Colors[colorScheme].text}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
}
