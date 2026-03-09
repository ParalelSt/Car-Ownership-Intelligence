import { forwardRef, type ComponentPropsWithoutRef } from "react";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  labelColor?: string;
  labelClassName?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      labelColor,
      labelClassName,
      className,
      children,
      error,
      icon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`w-full ${className}`}>
        <label
          className={`${labelClassName} ${labelColor ? labelColor : "text-accent"}`}
        >
          {label}
        </label>
        <div
          className={`flex items-center mt-2 mb-2 p-2 w-full h-10 border ${error ? "border-error" : "border-border"} rounded-base text-sm`}
        >
          {icon}
          <select
            className={`${icon ? "ml-1" : ""} w-full h-full text-sm text-text-primary`}
            ref={ref}
            {...props}
          >
            {children}
          </select>
        </div>

        {error ? (
          <span className="block mb-1 text-sm text-error">{error}</span>
        ) : null}
      </div>
    );
  },
);

export default Select;
