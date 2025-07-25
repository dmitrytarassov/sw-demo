"use client";

import { Button as HeroButton } from "@heroui/button";
import React from "react";

import { ButtonProps } from "@/components/ui/interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <HeroButton
      disabled={props.disabled}
      isDisabled={props.disabled}
      color={props.color}
      onPress={props.onClick}
    >
      {props.children}
    </HeroButton>
  );
};

export default Button;
