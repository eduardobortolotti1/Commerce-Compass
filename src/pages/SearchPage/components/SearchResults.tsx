import styled from "styled-components";

interface SearchResultsProps {
    children: React.ReactNode
}

const SearchResultsComponent = styled.div`
    margin-block-start: 35px;
`

function SearchResults({children}: SearchResultsProps) {
    return (
        <SearchResultsComponent className="d-flex flex-column gap-3 overflow-auto w-100">
            {children}
        </SearchResultsComponent>
    );
}

export default SearchResults;