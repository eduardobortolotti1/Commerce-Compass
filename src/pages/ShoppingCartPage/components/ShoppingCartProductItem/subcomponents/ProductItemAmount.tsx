import { Minus, Plus, Trash2 } from "react-feather";
import styled from "styled-components";

interface ProductItemAmountProps {
    id: string
    amount: number
    handleAmountChange?: (id: string, amount: number) => void
    deleteProduct?: (id: string) => void
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

function ProductItemAmount({ id, amount, handleAmountChange, deleteProduct }: ProductItemAmountProps) {
    function onAmountIncrease() {
        if (!handleAmountChange) return;
        handleAmountChange(id, amount + 1);
    }

    function onAmountDecrease() {
        if (!handleAmountChange) return;
        handleAmountChange(id, amount - 1);
    }

    function onDeleteProduct() {
        if (!deleteProduct) return;
        deleteProduct(id);
    }

    return (
        <ProductItemAmountComponent className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-4">
                <ChangeAmountButton onClick={onAmountDecrease}>
                    <Minus />
                </ChangeAmountButton>
                <span>{amount}</span>
                <ChangeAmountButton onClick={onAmountIncrease}>
                    <Plus />
                </ChangeAmountButton>
            </div>
            <button>
                <Trash2 className="color-grey-dark-1" onClick={onDeleteProduct}/>
            </button>
        </ProductItemAmountComponent>
    );
}

export default ProductItemAmount;