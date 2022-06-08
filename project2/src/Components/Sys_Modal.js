import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const SysModal = ({ message, visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View
        style={{
          backgroundColor: "rgba(00,00,00,.5)",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          {/* header */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
              }}
            >
              Modal
            </Text>
          </View>
          {/* body */}
          <View>
            <Text>{message}</Text>
          </View>
          {/* footer */}
          <View
            style={{
              marginTop: 20,
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
              <TouchableOpacity activeOpacity={0.5} onPress={onClose}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  ClOSE
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default SysModal;
