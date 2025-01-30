import styled from "styled-components";

const CheckoutInfoComponent = styled.div`

`;

interface CheckoutInfoProps {
    currency: string;
    total: number;
}

function CheckoutInfo({ currency, total }: CheckoutInfoProps) {
    return (
        <CheckoutInfoComponent className="d-flex justify-content-between align-items-center">
            <p className="m-0 font-12 fw-bold color-grey-dark-1">Total 2 items</p>
            <p className="m-0 font-16 fw-bold">{currency} {total}</p>
        </CheckoutInfoComponent>
    );
}

export default CheckoutInfo;