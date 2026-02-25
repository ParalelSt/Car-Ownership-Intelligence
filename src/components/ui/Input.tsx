interface InputProps {
  className?: string;
}

const Input = ({ className }: InputProps) => {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor="input-id"></label>
      <input
        className="w-full h-10 border-1 border-border rounded-base"
        type="text"
        id="input-id"
      />
    </div>
  );
};

export default Input;
