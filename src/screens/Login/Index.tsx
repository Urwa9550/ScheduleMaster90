import React, { useState } from "react";
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TextStyle, Platform, Alert } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

import { styles } from "./styles";
import { validateLogin } from "../../utils/Helper";
import InputField from "../../components/InputField";
import { renderStatusBar } from "../../utils/UIUtils";
import { String } from "../../utils/String";
import { LoginProps, ErrorState } from '../../utils/Types'


const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<ErrorState>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = () => {
    const error: ErrorState = validateLogin(email, password);
    setErrorMessage(error);

    if (Object.keys(error).length === 0) {
      if (email.toLowerCase() === "teacher@email.com") {
        navigation.navigate('Home2');
      } else if (email.toLowerCase() === "student@email.com") {
        navigation.navigate('Home');
      } else {
        setErrorMessage({ ...error, email: String.USER_NOT_FOUND });
      }
    }
  };

  const renderContent = () => {
    return (
      <KeyboardAvoidingView
        style={styles.content_container}
      >
        <Text style={styles.welcome_text}>Welcome Back</Text>

        <View style={styles.text_input_container}>
          <InputField
            title="Email"
            placeholder="someone@mail.com"
            onChangeText={(val) => { setEmail(val) }}
          />
          {errorMessage?.email && <Text style={styles.error_text}>{errorMessage.email}</Text>}

          <InputField
            title="Password"
            placeholder="••••••••"
            containerStyle={{ marginTop: 20 }}
            eyeOffSvg={true}
            secureTextEntry={true}
            onChangeText={(val) => { setPassword(val) }}
          />
          {errorMessage?.password && <Text style={styles.error_text}>{errorMessage.password}</Text>}
          <View>
            <Text style={styles.forgot_password_text}>Forgot Password?</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign in"
            disable={email === "" || password === ""}
            loading={isLoading}
            onPress={() => handleLogin()}
          />
        </View>

        <View style={styles.signup_label}>
          <Text style={styles.signup_text}>
            Don't have an account?
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => console.log("--Signup--")}
            >
              <Text style={styles.signup_link_text}> Sign up</Text>
            </TouchableOpacity>
          </View>

        </View>
        {renderBluetoothFooter()}
      </KeyboardAvoidingView>
    );
  };

  const checkDevicesList = () => {
    if (Platform.OS === "ios") {
      navigation.navigate("DevicesListIOS")
    } else {
      console.log("---coming soon---")
      Alert.alert("Coming Soon", "Bluetooth List not available for android devices.")
    }
  }

  const renderBluetoothFooter = () => {
    return (
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Check Nearby Bluetooth Devices"
          onPress={() => checkDevicesList()}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderStatusBar()}
      {renderContent()}
    </View>
  );
};

export default Login;
