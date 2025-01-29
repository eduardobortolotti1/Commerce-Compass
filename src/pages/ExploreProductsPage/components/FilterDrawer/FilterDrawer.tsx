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
    activeCategory: Category | undefined;
    setActiveCategory: (category: Category | undefined) => void;
    activeSortBy: SortBy | undefined;
    setActiveSortBy: (sortBy: SortBy | undefined) => void;
    onApplyFilter: (category: (Category | undefined), sortBy: (SortBy | undefined)) => void;
}


const FilterDrawerComponent = styled.div`
    padding: 25px 25px 30px 25px;
    gap: 35px;
    width: 100%;
    background-color: var(--white);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

function FilterDrawer({ isOpen, setOpen, activeCategory, setActiveCategory, activeSortBy, setActiveSortBy, onApplyFilter }: FilterDrawerProps) {
    function handleCategoryClick(category: Category | undefined) {
        setActiveCategory(category);
        console.log(category);
    }
    function handleSortByClick(sortBy: SortBy | undefined) {
        setActiveSortBy(sortBy);
        console.log(sortBy);
    }
    function handleApplyFilter() {
        onApplyFilter(activeCategory, activeSortBy);
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