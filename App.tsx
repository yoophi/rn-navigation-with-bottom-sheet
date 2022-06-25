import BottomSheet from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StyleSheet, View } from "react-native";
import { AppButton } from "./common/SimpleButton";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { BottomModalProvider } from "./shared/contexts/BottomModal";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isBottomModalOpened, setIsBottomModalOpened] = useState(false);
  //
  const snapPoints = useMemo(() => ["30%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <BottomModalProvider
          value={{
            bottomSheetRef,
            isBottomModalOpened,
            setIsBottomModalOpened,
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          {isBottomModalOpened && (
            <BottomSheet
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
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
                    style={{ backgroundColor: "#eee", width: 300, height: 100 }}
                  />
                  {/* </View>
                <View style={{ width: "100%" }}> */}
                  <AppButton
                    title="저장하기"
                    width="100%"
                    onPress={() => {
                      bottomSheetRef.current.close();
                    }}
                  ></AppButton>
                </View>
              </View>
            </BottomSheet>
          )}
        </BottomModalProvider>
      </SafeAreaProvider>
    );
  }
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
