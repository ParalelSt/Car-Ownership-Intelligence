interface ButtonProps {
  children: React.ReactNode;
  bg_color?: string;
  className?: string;
}

const Button = ({ children, bg_color, className }: ButtonProps) => {
  return (
    <button className={`${className} w-full button bg-${bg_color}`}>
      {children}
    </button>
  );
};

export default Button;
