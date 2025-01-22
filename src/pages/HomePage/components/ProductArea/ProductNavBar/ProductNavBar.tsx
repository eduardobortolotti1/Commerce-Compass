import styled from "styled-components";
import ProductNavBarButton from "./ProductNavBarButton";
import { useState } from "react";

const ProductNavBarComponent = styled.div`
  display: flex;
  gap: 10px;
`;

// Parent component
function ProductNavBar() {
  // State to track the active button
  const [activeButton, setActiveButton] = useState<string>("Headphone");

  // Function to update the active button
  function updateNavBar(name: string) {
    setActiveButton(name);
  }

  return (
    <ProductNavBarComponent>
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
    </ProductNavBarComponent>
  );
}

export default ProductNavBar;
