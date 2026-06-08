import "./globals.css";
import { Providers } from "../components/providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Skillseta",
  description: "AI-native skill intelligence platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
