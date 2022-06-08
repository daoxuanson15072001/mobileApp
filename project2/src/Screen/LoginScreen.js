import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import SysModal from "../Components/Sys_Modal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  // su kien click Login
  const onClickLogin = () => {
    //validate
    if (username.length == 0 || password.length == 0) {
      setErrorMessage("Please input login information");
      setShowModal(true);
      return;
    }
    axios({
      url: "https://thaoquan.herokuapp.com/api/user/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then((result) => {
        // luu thong tin vao Async Storage
        const currentUser = result.data.data.user;
        AsyncStorage.setItem("UserId", currentUser.username);
        AsyncStorage.setItem("Id", currentUser._id);
        AsyncStorage.setItem("Role", currentUser.role);
        navigation.navigate("home");
        console.log("succes");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        setShowModal(true);
      });
  };
  // su kien click close modal
  const onCloseModal = () => {
    setShowModal(false);
  };
  const onChangeUsername = (value) => {
    setUsername(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  return (
    <View style={{ backgroundColor: "#3498DB", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          margin: 20,
          flex: 1,
          borderRadius: 10,
        }}
      >
        <SysModal
          visible={showModal}
          message={errorMessage}
          onClose={onCloseModal}
        />
        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}
        >
          {/* header */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Login
            </Text>
          </View>
          {/* body */}
          <View
            style={{
              flex: 6,
            }}
          >
            <View
              style={{
                margin: 30,
              }}
            >
              {/* username */}
              <View style={{ color: "black", marginBottom: 10 }}>
                <Text>UserName</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginBottom: 10,
                }}
              >
                <View>
                  <AntDesign name="user" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      padding: 5,
                    }}
                    placeholder="Type your username"
                    value={username}
                    onChangeText={onChangeUsername}
                  ></TextInput>
                </View>
              </View>
              {/* password */}
              <View style={{ color: "black", marginBottom: 10 }}>
                <Text>Password</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                }}
              >
                <View>
                  <AntDesign name="lock" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      padding: 5,
                    }}
                    placeholder="Type your password"
                    secureTextEntry="true"
                    value={password}
                    onChangeText={onChangePassword}
                  ></TextInput>
                </View>
              </View>

              {/* Forgot Password */}
              <View
                style={{
                  alignItems: "flex-end",
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "black" }}>Forgot Password</Text>
              </View>

              {/* Login */}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <LinearGradient
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  colors={["#AED6F1", "#3498DB", "#2E86C1"]}
                  useAngle={true}
                  angle={45}
                >
                  <TouchableOpacity activeOpacity={0.5} onPress={onClickLogin}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      LOGIN
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <View
              style={{
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Using Sign Up</Text>
              {/* icon */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                }}
              >
                {/* icon fb */}
                <TouchableOpacity
                  style={{
                    margin: 5,
                  }}
                >
                  <AntDesign name="facebook-square" size={24} color="#3b5998" />
                </TouchableOpacity>
                {/* twitter */}
                <TouchableOpacity
                  style={{
                    margin: 5,
                  }}
                >
                  <AntDesign name="twitter" size={24} color="#1dcaff" />
                </TouchableOpacity>
                {/* google */}
                <TouchableOpacity
                  style={{
                    margin: 5,
                  }}
                >
                  <AntDesign name="googleplus" size={24} color="#EA4335" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* footer */}
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Or Sign Up Using</Text>
            {/* Butoon Sign Up */}
            <TouchableOpacity>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
