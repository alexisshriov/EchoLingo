import { View, Text, Button, SafeAreaView, TouchableWithoutFeedback, } from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const timerRef = useRef(null);
  const holdRef = useRef(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  }, []);

  const handlePress = () => {
    if (!holdRef.current) {
      console.log('onPress');
      // call your onPress method here
    }
  };

  const handlePressIn = () => {
    console.log("normal press!");
    timerRef.current = setTimeout(() => {
      console.log("recording.....");
      holdRef.current = true;
      // call your onHold method here
    }, 500); // 1000 ms = 1 second
  }

  const handlePressOut = () => {

    clearTimeout(timerRef.current);
    if (holdRef.current) {
      console.log("finished recording");
      holdRef.current = false;
    }
  }


  return (
    // <Text className="text-blue-500 text-5xl">this is the recording list</Text>
    <View class="">
      <View className="flex-row justify-between">
        <View className="flex-1 justify-center items-center py-8 border-gray-100">
          <Button
            title={false ? "Stop Recording" : "Start Recording"}
            // onPress={() => console.log("test")}
            onPressIn={() => console.log("started recording")}
            onPressOut={() => console.log("finished recording")}
          />
        </View>
        <View className="flex-1 justify-center items-center py-8 border-gray-100">
          <Button
            title={false ? "Stop Recording" : "Start Recording"}
            onPress={() => console.log("test")}
          />
        </View>
        <View className="flex-1 justify-center items-center py-10 bg-red-700">
          <Text>Item 3</Text>
        </View>
      </View>



      <View className="flex-row justify-between">
        <View className="flex-1 justify-center items-center py-8 border-gray-100">
        <TouchableWithoutFeedback

            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <View>
              <Text>Press Me</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View className="flex-1 justify-center items-center py-8 border-gray-100">
          <Button
            title={false ? "Stop Recording" : "Start Recording"}
            onPress={() => console.log("test")}
          />
        </View>
        <View className="flex-1 justify-center items-center py-10 bg-red-700">
          <Text>Item 3</Text>
        </View>
      </View>


{/* 
        <View className="flex-1 justify-center items-center py-8 border-gray-100">

        </View> */}




      {/* <View><Text>Item 2</Text></View>
        <View><Text>Item 3</Text></View>
        <View><Text>Item 4</Text></View>
        <View><Text>Item 5</Text></View>
        <View><Text>Item 6</Text></View>
        <View><Text>Item 7</Text></View>
        <View><Text>Item 8</Text></View>
        <View><Text>Item 9</Text></View>
        <View><Text>Item 10</Text></View>
        <View><Text>Item 11</Text></View>
        <View><Text>Item 12</Text></View> */}
    </View>
  );
};

export default HomeScreen;
