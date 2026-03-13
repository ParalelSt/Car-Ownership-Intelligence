interface BorderLineProps {
  className?: string;
}

const BorderLine = ({ className }: BorderLineProps) => {
  return <div className={`mt-2 mb-3 h-px bg-border-subtle ${className}`}></div>;
};

export default BorderLine;
