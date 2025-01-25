import { Minus, Plus, Trash2 } from "react-feather";
import styled from "styled-components";

interface ProductItemAmountProps {
    amount: number
}

const ProductItemAmountComponent = styled.div`
    svg {
        width: 20px;
        height: 20px;
    }
`;

const ChangeAmountButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--grey);

`;

function ProductItemAmount({ amount }: ProductItemAmountProps) {
    return (
        <ProductItemAmountComponent className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-4">
                <ChangeAmountButton>
                    <Minus />
                </ChangeAmountButton>
                <span>{amount}</span>
                <ChangeAmountButton>
                    <Plus />
                </ChangeAmountButton>
            </div>
            <Trash2 className="color-grey-dark-1"/>
        </ProductItemAmountComponent>
    );
}

export default ProductItemAmount;