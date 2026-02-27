interface ButtonProps {
  children: React.ReactNode;
  buttonVariant: "primary" | "secondary";
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  buttonVariant,
  type,
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${className} flex justify-center items-center w-full h-9 button-${buttonVariant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
