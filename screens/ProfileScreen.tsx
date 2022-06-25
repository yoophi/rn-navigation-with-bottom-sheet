import { SafeAreaView } from "react-native";
import { AppButton } from "../common/SimpleButton";
import { styles } from "../styles/common";

import React from "react";
import { Text, View } from "../components/Themed";
import { useBottomModal } from "../shared/contexts/BottomModal";

export function ProfileScreen() {
  const { bottomSheetRef, setIsBottomModalOpened } = useBottomModal();

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text style={styles.title}>프로필</Text>
        <Text style={styles.text}>프로필 화면입니다.</Text>
        <Text style={styles.text}>
          이후, 프로필 화면 수정을 마치고, 네비게이션 바 위에 BottomSheet 을
          표시하려면, 최상위 BottomSheet 가 필요합니다.
        </Text>
        <Text style={styles.text}>
          그런데, 제 생각에는 제보하기 처럼, 이 페이지도 Modal 로 RootStack 에
          포함되어 있는 편이 맞는 것 같아요.
        </Text>
        <View style={styles.skeletonText} />
        <View style={styles.skeletonText} />
        <AppButton
          onPress={() => {
            setIsBottomModalOpened(true);
            bottomSheetRef.current?.expand();
          }}
          title="최상위 BottomSheetModal 보이기"
        />
      </View>
    </SafeAreaView>
  );
}
