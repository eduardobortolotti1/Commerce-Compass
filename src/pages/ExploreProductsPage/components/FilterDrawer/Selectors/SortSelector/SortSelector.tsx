import ButtonContainer from "../ButtonContainer";
import SortButton from "./SortButton";
import { SortBy } from "../../../../../../types/sortby";
interface SortSelectorProps {
    activeSortBy: SortBy | undefined;
    updateFunction: (sortBy: SortBy | undefined) => void;
}

function SortSelector({ activeSortBy, updateFunction }: SortSelectorProps) {
    function handleSortByClick(sortBy: SortBy) {
        if (activeSortBy === sortBy) {
            updateFunction(undefined);
            return;
        }
        updateFunction(sortBy);
    }

    return (
        <div className="d-flex flex-column gap-2">
            <h3 className="m-0 font-16 fw-normal">Category</h3>
            <ButtonContainer>
                <SortButton text={"Popularity"} isActive={activeSortBy === "Popularity"} onClick={() => handleSortByClick("Popularity")} />
                <SortButton text={"Newest"} isActive={activeSortBy === "Newest"} onClick={() => handleSortByClick("Newest")} />
                <SortButton text={"Oldest"} isActive={activeSortBy === "Oldest"} onClick={() => handleSortByClick("Oldest")} />
                <SortButton text={"High Price"} isActive={activeSortBy === "High Price"} onClick={() => handleSortByClick("High Price")} />
                <SortButton text={"Low Price"} isActive={activeSortBy === "Low Price"} onClick={() => handleSortByClick("Low Price")} />
            </ButtonContainer>
        </div>
    );
}

export default SortSelector;