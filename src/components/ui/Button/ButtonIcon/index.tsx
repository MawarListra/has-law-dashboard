interface ButtonIconProps {
  type?: "button" | "submit";
  title?: string;
  onClick?: () => any;
  children: React.ReactNode;
  className?: string;
}

function ButtonIcon({
  type = "button",
  title,
  onClick,
  children,
  className,
}: ButtonIconProps) {
  return (
    <button type={type} title={title} onClick={onClick} className={className}>
      {children}
      <span className="sr-only">Icon Button</span>
    </button>
  );
}

export default ButtonIcon;
