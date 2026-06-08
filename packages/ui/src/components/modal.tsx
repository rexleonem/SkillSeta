import { Modal as RNModal, Pressable, Text, View } from "react-native";
import type { ReactNode } from "react";

export function Modal({
  visible,
  title,
  onClose,
  children
}: {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "center",
          justifyContent: "center",
          padding: 20
        }}
      >
        <Pressable
          onPress={(event) => event.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: 560,
            backgroundColor: "#0f172a",
            borderRadius: 24,
            padding: 24,
            gap: 16
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>{title}</Text>
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
}
