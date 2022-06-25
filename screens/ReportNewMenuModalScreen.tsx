import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useRef, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { AppButton } from "../common/SimpleButton";
import { Text, View } from "../components/Themed";
import { styles } from "../styles/common";

export function ReportNewMenuModalScreen({ navigation }) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomModalOpened, setIsBottomModalOpened] = useState(false);
  //
  const snapPoints = useMemo(() => ["35%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        style={{ backgroundColor: "#000" }}
        opacity={0.8}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );

  return (
    <View style={[styles.container, { backgroundColor: "#eee" }]}>
      <Text style={styles.title}>메뉴 제보하기</Text>
      <Text style={styles.text}>
        아래 버튼을 눌렀을 때 보이는 BottomSheet 는 이 화면에 포함된 BottomSheet
        입니다. 현재 화면처럼 Modal 로 구성되었을 때는 BottomSheet 가 화면에
        포함되어도 됩니다. (또는 Home 화면처럼 Navigation 영역을 덮을 필요가
        없을 때도 문제 없음) (Profile 화면은 TabNavigation 에 포함되어 있어서,
        탭 위에 표시하는 BottomSheet 를 표시하기 위해 App.tsx 에 포함된
        BottomSheet 를 사용합니다.)
      </Text>
      <View style={styles.skeletonText} />
      <View style={styles.skeletonText} />
      <AppButton
        title="메뉴 제보하기"
        onPress={() => {
          setIsBottomModalOpened(true);
          bottomSheetRef.current?.expand();
        }}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      {isBottomModalOpened && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}
        >
          <View style={bottomSheetStyles.contentContainer}>
            {/* <Text style={bottomSheetStyles.title}>내 주변 빵집 🎉</Text> */}
            <View
              style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 20,
              }}
            >
              <View
                style={{ width: 100, height: 50, backgroundColor: "#ccc" }}
              ></View>
              <Text>제보 감사해요!{"\n"}심사과정을 거쳐 반영할게요!</Text>
              <AppButton
                title="확인"
                width="90%"
                onPress={() => {
                  bottomSheetRef.current.close();
                  navigation.goBack();
                }}
              ></AppButton>
            </View>
          </View>
        </BottomSheet>
      )}
    </View>
  );
}

const bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
  },
});
