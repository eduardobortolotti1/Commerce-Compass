import styled from "styled-components";
import ProductNavBarButton from "./ProductNavBarButton";
import { useState } from "react";

const ProductNavComponent = styled.div`
  display: flex;
  gap: 10px;
`;

interface ProductNavBarButtonProps {
  updateFunction: (name: string) => void;
}

// Parent component
function ProductNav({ updateFunction }: ProductNavBarButtonProps) {
  // State to track the active button
  const [activeButton, setActiveButton] = useState<string>("Headphone");

  // Function to update the active button
  function updateNavBar(name: string) {
    // Updates the active button visually
    setActiveButton(name);

    // Updates the parent component
    updateFunction(name);
  }

  return (
    <ProductNavComponent>
      <ProductNavBarButton
        text="Headphone"
        isActive={activeButton === "Headphone"}
        onClick={() => updateNavBar("Headphone")}
      />
      <ProductNavBarButton
        text="Headset"
        isActive={activeButton === "Headset"}
        onClick={() => updateNavBar("Headset")}
      />
    </ProductNavComponent>
  );
}

export default ProductNav;
