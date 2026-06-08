import type { PressableProps, TextProps } from "react-native";
import { Pressable, Text } from "react-native";

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends PressableProps {
  label: string;
  variant?: ButtonVariant;
}

export function Button({ label, variant = "primary", style, ...props }: ButtonProps) {
  const palette = {
    primary: { backgroundColor: "#7c3aed", color: "#ffffff" },
    secondary: { backgroundColor: "#111827", color: "#ffffff" },
    ghost: { backgroundColor: "transparent", color: "#e5e7eb" }
  }[variant];

  return (
    <Pressable
      accessibilityRole="button"
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: palette.backgroundColor,
          minHeight: 48
        },
        style
      ]}
      {...props}
    >
      <Text
        style={{
          color: palette.color,
          fontWeight: "600"
        } satisfies TextProps["style"]}
      >
        {label}
      </Text>
    </Pressable>
  );
}
