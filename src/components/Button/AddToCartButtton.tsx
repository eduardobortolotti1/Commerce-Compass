import styled from "styled-components";

const ButtonWrapper = styled.button`
    width: 100%;
    padding-inline: 25px;

button {
    padding: 15px;
    margin-block: 35px;
    color: var(--white);
    background-color: var(--primary);
    border-radius: 10px;
    width: 100%;
    }
`;

function AddToCartButtton() {
    return (
        <ButtonWrapper className="cartButton">
            <button>Add to cart</button>
        </ButtonWrapper>
    );
}

export default AddToCartButtton;