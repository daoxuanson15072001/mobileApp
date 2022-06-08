import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text, Modal, TouchableOpacity, Button ,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
const UserInfo = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [userRole, setUserRole] = useState("");
    useEffect(() => {
      AsyncStorage.getItem("Id").then((result) => {
        setUserId(result);
      });
      AsyncStorage.getItem("UserId").then((result) => {
        setUsername(result);
      });
      AsyncStorage.getItem("Role").then((result) => {
        setUserRole(result);
      });
    }, []);
    const onLogOut = () => {
      AsyncStorage.clear();
      navigation.replace("login");
    };
    return (
      <View style={{
          margin : 30,
          
      }}>
        
        <View>
          <Text>userName: {username}</Text>
        </View>
        <View>
          <Text>userId: {userId}</Text>
        </View>
        <View>
          <Text>userRole: {userRole}</Text>
        </View>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button title="LogOut" onPress={onLogOut}></Button>
        </View>
      </View>
    );
  };

export default UserInfo;