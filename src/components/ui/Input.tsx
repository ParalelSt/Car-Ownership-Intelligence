import { EyeIcon } from "@phosphor-icons/react";
import React, {
  type ComponentPropsWithoutRef,
  forwardRef,
  useState,
} from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  labelColor?: string;
  labelClassName?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelColor,
      labelClassName,
      type,
      placeholder,
      className,
      error,
      icon,
      ...props
    },
    ref,
  ) => {
    const isPassword = type === "password";
    const [showPassword, setShowPassword] = useState(false);

    const resolvedType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className={`w-full ${className}`}>
        <label
          className={`${labelClassName} ${labelColor ? labelColor : "text-accent"}`}
        >
          {label}
        </label>
        <div
          className={`flex items-center mt-2 mb-2 p-2 w-full h-10 border ${error ? "border-error" : "border-border"} rounded-base text-sm placeholder:text-text-muted`}
        >
          {icon ? icon : ""}
          <input
            className={`${icon ? "ml-1" : ""} ${isPassword ? "mr-1" : ""} w-full h-full text-sm placeholder:text-text-muted`}
            ref={ref}
            type={resolvedType}
            placeholder={placeholder}
            autoComplete="off"
            {...props}
          />
          {isPassword && (
            <button
              className=""
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <EyeIcon size={18} className="text-accent" />
              ) : (
                <EyeIcon size={18} className="text-text-muted" />
              )}
            </button>
          )}
        </div>

        {error ? (
          <span className="block mb-1 text-sm text-error">{error}</span>
        ) : null}
      </div>
    );
  },
);

export default Input;
