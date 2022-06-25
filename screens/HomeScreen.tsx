import { FontAwesome } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../common/SimpleButton";
import { Text, View } from "../components/Themed";
import { styles } from "../styles/common";
import { RootTabScreenProps } from "../types";

export function HomeScreen({ navigation }: RootTabScreenProps<"TabOne">) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [bottomSheetOpened, setBottomSheetOpen] = useState(false);

  // variables
  const snapPoints = useMemo(() => ["25%", "40%", "100%"], []);

  // callbacks
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>지도와 빵집이 표시되는 메인 화면 입니다.</Text>
      <Text style={styles.text}>
        Home 페이지에는 BottomSheet 가 하나 포함되어 있어서, BottomSheet 를
        이용하여 "내 주변 빵집"을 표시합니다.
      </Text>
      <View style={styles.skeletonText} />
      <View style={styles.skeletonText} />
      <AppButton
        onPress={() => {
          setBottomSheetOpen(!bottomSheetOpened);
          bottomSheetRef.current?.expand();
        }}
        title={`빵집 ${bottomSheetOpened ? "닫기" : "보이기"}`}
      />

      {bottomSheetOpened && (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView>
            <View style={bottomSheetStyles.contentContainer}>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={bottomSheetStyles.title}>내 주변 빵집 🎉</Text>
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetRef.current.close();
                    setBottomSheetOpen(false);
                  }}
                >
                  <FontAwesome
                    name="close"
                    size={20}
                    // color={Colors[colorScheme].text}
                    style={{}}
                  ></FontAwesome>
                </TouchableOpacity>
              </View>
              <SampleRow title="밀당제과" navigation={navigation} />
              <View style={{ height: 24 }} />
              <SampleRow title="어글리 베이커리" navigation={navigation} />
              <View style={{ height: 24 }} />
              <SampleRow title="푸하하 크림빵" navigation={navigation} />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
}

const SampleRow = ({ title, navigation }) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <View
      style={{
        marginRight: 10,
        width: 100,
        height: 100,
        backgroundColor: "#ccc",
      }}
    ></View>
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BakeryHome", { title });
        }}
      >
        <View
          style={{
            marginBottom: 10,
            width: "100%",
            height: 20,
            // backgroundColor: "#ccc",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 10,
          width: "100%",
          height: 20,
          backgroundColor: "#ccc",
        }}
      ></View>
      <View
        style={{
          marginBottom: 10,
          width: "100%",
          height: 20,
          backgroundColor: "#ccc",
        }}
      ></View>
    </View>
  </View>
);

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
