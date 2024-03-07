import { RaduxProvider } from "@/redux/provider";
import React from "react";

export default function Authentication({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main><RaduxProvider>{children}</RaduxProvider></main>;
}
