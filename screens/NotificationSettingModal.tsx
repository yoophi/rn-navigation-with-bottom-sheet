import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/common";

export function NotificationSettingModal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>알림 설정</Text>
      <Text style={styles.text}>알림 설정 페이지입니다.</Text>
    </View>
  );
}
