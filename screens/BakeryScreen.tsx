import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../common/SimpleButton";
import { Text, View } from "react-native";
import { styles } from "../styles/common";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export function BakeryScreen({ route, navigation }) {
  const { title } = route.params;
  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 0 }]}>
      <View
        style={{
          width: "100%",
          height: 200,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#ccc",
            marginBottom: 20,
          }}
        ></View>
        <View
          style={{
            margin: 5,
            position: "absolute",
            top: 5,
            right: 5,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="close" size={20} style={{ color: "#666" }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, width: "100%" }}>
        <View>
          <Text style={styles.title}>{title} </Text>
        </View>

        <View style={{ flexDirection: "column", width: "100%" }}>
          <View
            style={{
              marginBottom: 10,
              width: `${60 + 40 * Math.random()}%`,
              height: 20,
              backgroundColor: "#ccc",
            }}
          ></View>
          <View
            style={{
              marginBottom: 10,
              width: `${60 + 40 * Math.random()}%`,
              height: 20,
              backgroundColor: "#ccc",
            }}
          ></View>
          <View
            style={{
              marginBottom: 10,
              width: `${60 + 40 * Math.random()}%`,
              height: 20,
              backgroundColor: "#ccc",
            }}
          ></View>
        </View>
        <Text style={styles.text}>
          이 페이지는 TabNavigation 으로 하면, 상단에 이미지보여주면서 스크롤이
          어느 정도 진행된 후에만 탭 네비게이션을 상단에 고정해주는 Sticky
          Header Navigation 을 구현할 수 없으니 그냥 한 페이지로 구성하고
          수동으로 처리하는 편이 나을 것 같습니다.
        </Text>
        <Text style={styles.text}>
          전체 리뷰 보기, 리뷰 작성은 Modal 로 처리하는 편이 작업이 수월할 것
          같습니다.
        </Text>
        <Text style={styles.text}>
          리스트 편집 인터페이스는, 현재 페이지에 포함된 BottomSheet 를 이용해서
          구성하면 될 것 같습니다.
        </Text>
        <Text style={styles.text}>
          메뉴 제보는, 빵집 제보하는 화면과의 별도 Modal 을 사용하면 될 것
          같습니다.
        </Text>
        <View style={{ height: 20 }} />
        <AppButton
          title="메뉴 제보하기"
          onPress={() => navigation.navigate("ReportNewMenuModal")}
        />
      </View>
    </SafeAreaView>
  );
}
