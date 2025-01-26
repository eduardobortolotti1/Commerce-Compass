import styled from "styled-components";
import ButtonContainer from "../ButtonContainer";
import SortButton from "./SortButton";
import React from "react";
import { SortBy } from "../../../types/sortby";

interface SortSelectorProps {
    updateFunction: (sortBy: SortBy) => void;
}

function SortSelector({ updateFunction }: SortSelectorProps) {
    const [activeCategory, setActiveCategory] = React.useState<SortBy>("Popularity");

    function handleSortByClick(category: SortBy) {
        setActiveCategory(category);
        updateFunction(category);
    }

    return (
        <div className="d-flex flex-column gap-2">
            <h3 className="m-0 font-16 fw-normal">Category</h3>
            <ButtonContainer>
                <SortButton text={"Popularity"} isActive={activeCategory === "Popularity"} onClick={() => handleSortByClick("Popularity")} />
                <SortButton text={"Newest"} isActive={activeCategory === "Newest"} onClick={() => handleSortByClick("Newest")} />
                <SortButton text={"Oldest"} isActive={activeCategory === "Oldest"} onClick={() => handleSortByClick("Oldest")} />
                <SortButton text={"High Price"} isActive={activeCategory === "High Price"} onClick={() => handleSortByClick("High Price")} />
                <SortButton text={"Low Price"} isActive={activeCategory === "Low Price"} onClick={() => handleSortByClick("Low Price")} />
            </ButtonContainer>
        </div>
    );
}

export default SortSelector;