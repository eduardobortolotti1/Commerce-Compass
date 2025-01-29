import styled from "styled-components";

const LoadingItemComponent = styled.div`
    width: 100%;
    height: 300px;
    background-color: var(--light-grey-1);
    border-radius: 30px;
`;

function LoadingItem() {
    return (
        <LoadingItemComponent className="d-flex justify-content-center align-items-center text-center">
            <p>Loading items...</p>
        </LoadingItemComponent>    
    );
}

export default LoadingItem;