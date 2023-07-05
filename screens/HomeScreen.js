import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-blue-500 text-5xl">Mi primera APP</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
