import styled from "styled-components";

interface ButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void; // Accept an onClick function as a prop
}

// Styled components
const ButtonInactive = styled.button`
  padding-inline: 15px;
  padding-block: 3px;
  font-size: 14px;
  color: var(--grey-dark-1);
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonActive = styled(ButtonInactive)`
  &.active {
    color: var(--white);
    background-color: var(--primary);
    border-radius: 30px;
  }
`;

// Child component
function ProductNavBarButton({ text, isActive, onClick }: ButtonProps) {
  return (
    <ButtonActive onClick={onClick} className={isActive ? "active" : ""}>
      {text}
    </ButtonActive>
  )
}

export default ProductNavBarButton;
