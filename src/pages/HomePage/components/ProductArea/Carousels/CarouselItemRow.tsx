import React from 'react';
import styled from 'styled-components';

interface CarouselItemRowProps {
  children: React.ReactNode; // This allows any JSX content to be passed as children
}

const CarouselItemRowComponent = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

function CarouselItemRow({ children }: CarouselItemRowProps) {
  return (
    <CarouselItemRowComponent className="row w-100 h-100">
      {children}  {/* Render the children passed to this component */}
    </CarouselItemRowComponent>
  );
}

export default CarouselItemRow;
