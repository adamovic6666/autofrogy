"use client";
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`${styles.Button} ${
        disabled ? styles.Disabled : ""
      } button-red`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
