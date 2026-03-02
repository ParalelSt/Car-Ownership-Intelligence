import { type ComponentPropsWithoutRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
  icon?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, className, error, icon, ...props }, ref) => {
    return (
      <div className={`w-full ${className}`}>
        <label className="text-accent">{label}</label>
        <div
          className={`mt-2 mb-2 w-full h-10 border ${error ? "border-error" : "border-border"} rounded-base text-sm placeholder:text-text-muted`}
        >
          {icon ? icon : ""}
          <input
            className="p-2 w-full h-full text-sm placeholder:text-text-muted"
            ref={ref}
            placeholder={placeholder}
            {...props}
            autoComplete="off"
          />
        </div>
        {error ? (
          <span className="block mb-1 text-sm text-error">{error}</span>
        ) : (
          ""
        )}
      </div>
    );
  },
);

export default Input;
