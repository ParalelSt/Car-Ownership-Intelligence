interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`card w-full h-full ${className}`}>{children}</div>;
};

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-3">{children}</div>;
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const CardFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-4">{children}</div>;
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
