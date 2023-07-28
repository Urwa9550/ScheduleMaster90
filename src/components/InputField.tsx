import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, View, ViewStyle, TextInput as Input, Text, Keyboard, KeyboardType, StyleSheet } from 'react-native';
import { Colors } from "../utils/Colors";
import { EyeOffSvg, EyeOnSvg, CheckSvg } from "../assets/svg";

interface InputFieldProps {
  title: string;
  placeholder: string;
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  check?: boolean;
  eyeOffSvg?: boolean;
  onChangeText: (value: string) => void;
  autoFocused?: boolean;
}

const InputField = ({
  title,
  placeholder,
  icon,
  containerStyle,
  secureTextEntry,
  keyboardType,
  check,
  eyeOffSvg = false,
  onChangeText,
}: InputFieldProps) => {
  const inputRef = useRef(null);

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [txt, settxt] = useState("");
  const [colorINP, setColorINP] = useState({
    border: Colors.inputBorder,
    text: Colors.inputLabel,
  });

  useEffect(() => {
    // const value = inputRef?.current?.value || "";
    // console.log("-------", value)
    onChangeText(txt);

  }, [txt, onChangeText])

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colorINP.border,
          ...containerStyle
        }
      ]}
    >
      <Input
        ref={inputRef}
        style={styles.input}
        autoComplete="off"
        onFocus={() => { setColorINP({ border: Colors.primaryBlue, text: Colors.primaryBlue }) }}
        onBlur={() => { setColorINP({ border: Colors.inputBorder, text: Colors.inputLabel }) }}
        selectionColor={Colors.primaryBlue}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && passwordVisible}
        placeholderTextColor={Colors.lightGray}
        onChangeText={(val) => settxt(val)}
      />
      {title && (
        <View
          style={styles.title}
        >
          <Text
            style={[styles.titleTxt, { color: colorINP.text, }]}
          >
            {title}
          </Text>
        </View>
      )}
      {check && <View style={{ paddingHorizontal: 20 }}>{<CheckSvg />}</View>}
      {eyeOffSvg && (
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!passwordVisible);
            Keyboard.dismiss();
          }}
          style={{ paddingHorizontal: 20 }}>
          {passwordVisible ?
            <EyeOffSvg stroke={Colors.gray} /> :
            <EyeOnSvg stroke={Colors.gray} />
          }
        </TouchableOpacity>
      )}
      {icon && (
        <TouchableOpacity
          style={styles.icon}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    top: -12,
    left: 20,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  titleTxt: {
    fontSize: 12,
    textTransform: "capitalize",
    lineHeight: 12 * 1.7,
  },
  input: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
    color: Colors.black,
  }

});

export default React.memo(InputField);
