import { TextInput, View } from "react-native";

export interface InputProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
}

export function Input({ value, placeholder, onChangeText }: InputProps) {
  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#374151",
        paddingHorizontal: 14,
        minHeight: 48,
        justifyContent: "center"
      }}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af"
        style={{ color: "#f9fafb" }}
      />
    </View>
  );
}
