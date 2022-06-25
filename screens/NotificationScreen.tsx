import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components/Themed";
import { styles } from "../styles/common";

export function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>알림</Text>
      <Text style={styles.text}>
        알림 페이지 우상단의 아이콘은 Modal로 처리해야 할 것 같은데, 프로필에도
        설정화면이 있고해서 겹치는건지, 아니면 설정의 특정 페이지를 여는건지
        확인해봐야겠네요.
      </Text>
    </SafeAreaView>
  );
}
