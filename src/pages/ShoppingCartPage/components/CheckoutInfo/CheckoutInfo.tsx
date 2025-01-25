import styled from "styled-components";

const CheckoutInfoComponent = styled.div`

`;

function CheckoutInfo() {
    return (
        <CheckoutInfoComponent className="d-flex justify-content-between align-items-center">
            <p className="m-0 font-12 fw-bold color-grey-dark-1">Total 2 items</p>
            <p className="m-0 font-16 fw-bold">USD 295</p>
        </CheckoutInfoComponent>
    );
}

export default CheckoutInfo;