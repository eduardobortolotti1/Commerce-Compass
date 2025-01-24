import styled from 'styled-components';

interface ShoppingCartBadgeProps {
  amountInCart: number;
}

const BadgeContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: -10px;
  width: 15px;
  height: 15px;
  background-color: #52EA5A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: bold;
`;

function ShoppingCartBadge({ amountInCart }: ShoppingCartBadgeProps) {
  return (
    <BadgeContainer>
      {amountInCart}
    </BadgeContainer>
  );
}

export default ShoppingCartBadge;
