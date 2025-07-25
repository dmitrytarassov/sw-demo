import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: "success" | "warning" | "danger" | "primary" | "secondary";
};
