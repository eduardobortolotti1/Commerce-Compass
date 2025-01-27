import styled from "styled-components";
import ProductNavBarButton from "./FilterNavBarButton";
import { useState } from "react";
import { Category } from "../../../../../types/category";

const ProductNavComponent = styled.div`
  display: flex;
  gap: 10px;
`;

interface ProductNavBarButtonProps {
  onClick: (name: Category) => void;
}

// Parent component
function ProductNavBar({ onClick }: ProductNavBarButtonProps) {
  // State to track the active button
  const [activeButton, setActiveButton] = useState<string>("Headphone");

  // Function to update the active button
  function updateNavBar(name: Category) {
    // Updates the active button visually
    setActiveButton(name);

    // Updates the parent component
    onClick(name);
    console.log(name);
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

export default ProductNavBar;
