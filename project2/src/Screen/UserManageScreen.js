import { View, Text, FlatList, Image, TextInput ,TouchableOpacity} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
const UserManageScreen = () => {
  const [userList, setUserList] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      url: "https://thaoquan.herokuapp.com/api/user",
      method: "GET",
    })
      .then((result) => {
        const list = result.data.data.userList;
        setUserList(list);
      })
      .catch((error) => {
        console.log("fetch data fail");
      });
  };
  return (
    <View>
      <View>
        <Text>UserManageScreen</Text>
      </View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 10,
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <TextInput style={{ flex: 1 }}></TextInput>
          <AntDesign name="search1" size={20} color="black" />
        </View>
      </View>
      <FlatList
        data={userList}
        keyExtractor={(item) => item._id.toString()}
        renderItem={(item) => {
          console.log(item);
          return (
            <View>
              <View
                style={{
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: "white",
                  marginBottom: 10,
                  marginHorizontal: 10,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.item.avatar }}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 10,
                    }}
                  ></Image>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#2E86C1",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    {item.item.username}
                  </Text>
                  <Text>{item.item.role}</Text>
                  <Text>{item.item.createDate}</Text>
                </View>
                <View style ={{
                    justifyContent : "center",
                    alignItems: "center",
                    
                }}>
                    <TouchableOpacity style={{
                        backgroundColor : "red",
                        padding : 5,
                        borderRadius: 5,
                        width:30,
                        height:30,
                    }}>
                    <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default UserManageScreen;
