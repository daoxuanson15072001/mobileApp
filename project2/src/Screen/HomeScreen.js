import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "./UserInfo";
import SettingScreen from "./SettingScreen";
import UserManageScreen from "./UserManageScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2E86C1",
      }}
    >
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="logout" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="UserManage"
        component={UserManageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24}></AntDesign>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
