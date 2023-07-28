import { View, Text, TouchableOpacity, ActivityIndicator, ViewStyle, TextStyle } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";

interface PrimaryButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  disable?: boolean;
  loading?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}


const PrimaryButton = ({ title, onPress, containerStyle, style, textStyle, disable, loading }: PrimaryButtonProps) => {

  return (
    <View style={{ ...containerStyle, flex: 1 }}>
      <TouchableOpacity
        style={{
          // width: "100%",
          height: 50,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: !disable ? Colors.primaryBlue : Colors.inputBorder,
          ...style
        }}
        onPress={onPress}
      >
        {loading ? (
          <ActivityIndicator color={Colors.blue} />
        ) : (<Text
          style={{
            color: Colors.white,
            textTransform: "capitalize",
            fontSize: 16,
            fontWeight: '800',
            letterSpacing: 1.2,
            ...textStyle,
          }}
        >
          {title}
        </Text>)}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
