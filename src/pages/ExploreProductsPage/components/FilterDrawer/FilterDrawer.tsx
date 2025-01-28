import React from "react";
import { Sheet } from "react-modal-sheet";
import styled from "styled-components";
import { Category } from "../../../../types/category";
import { SortBy } from "../../../../types/sortby";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import DrawerHeader from "../../../../components/Drawers/FilterDrawer/components/DrawerHeader";
import CategorySelector from "./Selectors/CategorySelector/CategorySelector";
import SortSelector from "./Selectors/SortSelector/SortSelector";

interface FilterDrawerProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}

const FilterDrawerComponent = styled.div`
    padding: 25px 25px 30px 25px;
    gap: 35px;
    width: 100%;
    background-color: var(--white);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

function FilterDrawer({ isOpen, setOpen }: FilterDrawerProps) {
    const [activeCategory, setActiveCategory] = React.useState<Category>("Headphone");
    const [activeSortBy, setActiveSortBy] = React.useState<SortBy>("Popularity");
    const [activeFilter, setActiveFilter] = React.useState({ category: activeCategory, sortBy: activeSortBy });

    function handleCategoryClick(category: Category) {
        setActiveCategory(category);
        setActiveFilter({ category: category, sortBy: activeSortBy });
    }
    function handleSortByClick(sortBy: SortBy) {
        setActiveSortBy(sortBy);
        setActiveFilter({ category: activeCategory, sortBy: sortBy });
    }
    function handleApplyFilter() {
        setActiveFilter({ category: activeCategory, sortBy: activeSortBy });
    }

    return (
        <div style={{maxWidth: "300px"}}>
            <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height" rootId="root" style={{maxWidth: "370px", left: "0", right: "0", margin: "auto"}}>
                <Sheet.Container>
                    <Sheet.Content>{
                        <div>
                            <FilterDrawerComponent className="d-flex flex-column">
                                <DrawerHeader text="Filter" setOpen={setOpen}/>
                                <CategorySelector updateFunction={handleCategoryClick} />
                                <SortSelector updateFunction={handleSortByClick} />
                                <PrimaryButton text="Apply Filter" onClick={handleApplyFilter} />
                            </FilterDrawerComponent>
                        </div>
                    }</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
}

export default FilterDrawer;