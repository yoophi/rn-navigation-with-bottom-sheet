import { styles } from "../styles/common";

import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../common/SimpleButton";
import { Text, View } from "../components/Themed";

export function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <View
        style={{
          width: 300,
          height: 300,
          marginTop: 20,
          backgroundColor: "#ccc",
        }}
      />
      <View style={{ height: 20 }} />
      <Text>온보딩 과정을 수행하지 않았을 때 보일 화면</Text>
      <View style={{ height: 20 }} />
      <AppButton
        onPress={() => {
          navigation.navigate("Root");
        }}
        title="시작하기"
      />
    </SafeAreaView>
  );
}
