import { Sliders } from "react-feather";
import styled from "styled-components";

const FilterButtonComponent = styled.button`
    border: 1px solid var(--grey);
    padding: 10px;
    border-radius: 10px;
    color: black;
`;

interface FilterButtonProps {
    onClick: () => void;
}

function FilterButton({ onClick }: FilterButtonProps) {
    function handleClick() {
        onClick();
    }

    return (
        <FilterButtonComponent onClick={handleClick} className="d-flex justify-content-center align-items-center gap-2 w-100">
            <Sliders />
            Filter
        </FilterButtonComponent>
    );
}

export default FilterButton;