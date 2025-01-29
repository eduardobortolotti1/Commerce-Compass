import styled from "styled-components";
import { SortBy } from "../../../../../../types/sortby";

const SortButtonComponent = styled.button`
    padding-inline: 15px;
    padding-block: 10px;
    background-color: transparent;
    color: var(--default);
    border: 1px solid var(--grey-dark-1);
    border-radius: 10px;

    &.active {
        color: var(--white);
        background-color: var(--primary);
        border: none;
    }
`;

interface SortButtonProps {
    text: SortBy;
    isActive: boolean;
    onClick: (name: SortBy) => void;
}

function SortButton({ text, isActive, onClick }: SortButtonProps) {
    function handleClick() {
        onClick(text);
    }

    return (
        <SortButtonComponent className={`font-14 ${isActive ? "active" : ""}`} onClick={handleClick}>
            {text}
        </SortButtonComponent>
    );
}

export default SortButton;