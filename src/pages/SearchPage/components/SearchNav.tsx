import { ChevronLeft, ShoppingCart } from "react-feather"
import styled from "styled-components";

const SearchNavComponent = styled.div`
    padding-block: 15px;
    margin-block-end: 15px;
`

function SearchNav() {
    return (
        <SearchNavComponent className="d-flex justify-content-between align-items-center">
            <button>
                <ChevronLeft />
            </button>
            <p className="font-16 fw-bold m-0">Search</p>
            <button>
                <ShoppingCart />
            </button>
        </SearchNavComponent>
    );
}

export default SearchNav;