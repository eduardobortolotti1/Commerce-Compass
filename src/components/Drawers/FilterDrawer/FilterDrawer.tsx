import styled from "styled-components";
import DrawerHeader from "./components/DrawerHeader";
import CategorySelector from "../../Selectors/CategorySelector/CategorySelector";
import React from "react";
import { Category } from "../../../types/category";
import SortSelector from "../../Selectors/SortSelector/SortSelector";
import { SortBy } from "../../../types/sortby";
import PrimaryButton from "../../Button/PrimaryButton";

const FilterDrawerComponent = styled.div`
    padding: 25px 25px 30px 25px;
    gap: 35px;
    width: 100%;
    background-color: var(--white);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

function FilterDrawer() {
    const [activeCategory, setActiveCategory] = React.useState<Category>("Headphone");
    const [activeSortBy, setActiveSortBy] = React.useState<SortBy>("Popularity");
    const [activeFilter, setActiveFilter] = React.useState({ category: activeCategory, sortBy: activeSortBy });
    
    function handleCategoryClick(category: Category) {
        setActiveCategory(category);
        console.log(category);
        setActiveFilter({ category: category, sortBy: activeSortBy });
    }

    function handleSortByClick(sortBy: SortBy) {
        setActiveSortBy(sortBy);
        console.log(sortBy);
        setActiveFilter({ category: activeCategory, sortBy: sortBy });
    }

    function handleApplyFilter() {
        setActiveFilter({ category: activeCategory, sortBy: activeSortBy });
        console.log(activeFilter);
    }

    return (
        <FilterDrawerComponent className="d-flex flex-column">
            <DrawerHeader text="Filter"/>
            <CategorySelector updateFunction={handleCategoryClick}/>
            <SortSelector updateFunction={handleSortByClick}/>
            <PrimaryButton text="Apply Filter" onClick={handleApplyFilter}/>
        </FilterDrawerComponent>
    );
}

export default FilterDrawer;