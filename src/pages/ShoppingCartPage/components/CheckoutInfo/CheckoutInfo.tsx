import styled from "styled-components";

const CheckoutInfoComponent = styled.div`

`;

interface CheckoutInfoProps {
    amount: number;
    currency: string;
    total: number;
}

function CheckoutInfo({ amount, currency, total }: CheckoutInfoProps) {
    return (
        <CheckoutInfoComponent className="d-flex justify-content-between align-items-center">
            {amount ?
                <div>
                    <p className="m-0 font-12 fw-bold color-grey-dark-1">Total {amount} items</p>
                    <p className="m-0 font-16 fw-bold">{currency} {total.toFixed(2)}</p>
                </div> :
                <p className="m-0 font-16 fw-bold color-grey-dark-1">Your cart is empty</p>}
        </CheckoutInfoComponent>
    );
}

export default CheckoutInfo;