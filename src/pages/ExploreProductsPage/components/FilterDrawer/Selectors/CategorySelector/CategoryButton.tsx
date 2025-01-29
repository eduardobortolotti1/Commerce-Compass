import styled from "styled-components";
import { Category } from "../../../../../../types/category";

const CategoryButtonComponent = styled.button`
    padding-inline: 15px;
    padding-block: 2px;
    background-color: transparent;
    color: var(--grey-dark-1);
    border-radius: 30px;

    &.active {
        color: var(--white);
        background-color: var(--primary);
    }
`;

interface CategoryButtonProps {
    text: Category;
    isActive: boolean;
    onClick: (name: Category) => void;
}

function CategoryButton({ text, isActive, onClick }: CategoryButtonProps) {
    function handleClick() {
        onClick(text);
    }

    return (
        <CategoryButtonComponent className={`font-14 ${isActive ? "active" : ""}`} onClick={handleClick}>
            {text}
        </CategoryButtonComponent>
    );
}

export default CategoryButton;