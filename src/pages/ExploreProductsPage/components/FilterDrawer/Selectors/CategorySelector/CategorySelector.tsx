import ButtonContainer from "../ButtonContainer";
import CategoryButton from "./CategoryButton";
import { Category } from "../../../../../../types/category";

interface CategorySelectorProps {
    activeCategory: Category | undefined;
    updateFunction: (category: Category | undefined) => void;
}

function CategorySelector({ activeCategory, updateFunction }: CategorySelectorProps) {
    function handleCategoryClick(category: Category) {
        if (activeCategory === category) {
            updateFunction(undefined);
            return;
        }
        updateFunction(category);
    }

    return (
        <div className="d-flex flex-column gap-2">
            <h3 className="m-0 font-16 fw-normal">Category</h3>
            <ButtonContainer>
                <CategoryButton text={"Headphone"} isActive={activeCategory == "Headphone"} onClick={() => handleCategoryClick("Headphone")} />
                <CategoryButton text={"Headset"} isActive={activeCategory == "Headset"} onClick={() => handleCategoryClick("Headset")} />
            </ButtonContainer>
        </div>
    );
}

export default CategorySelector;