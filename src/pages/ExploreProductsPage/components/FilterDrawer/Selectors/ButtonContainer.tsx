interface ButtonContainerProps {
  children?: React.ReactNode;
  
}

function ButtonContainer({ children,  }: ButtonContainerProps) {
  return (
    <div className="d-flex gap-2 flex-wrap">
      {children}
    </div>
  );
}

export default ButtonContainer;