import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  ...rest
}) => {
  const baseStyles =
    "transition-colors duration-200 text-white px-6 py-2 rounded-sm text-[14px] sm:text-[16px]";

  const defaultStyles = "bg-accent ring-2 ring-accent hover:bg-accent/90";

  const outlineStyles = "ring-2 ring-accent !text-accent hover:bg-accent/10";

  const combinedClassName = `${baseStyles} ${
    variant === "default" ? defaultStyles : outlineStyles
  } ${rest.className || ""}`;

  return (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
