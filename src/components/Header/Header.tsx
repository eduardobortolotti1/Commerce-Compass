import styled from "styled-components";

interface HeaderProps {
    children: React.ReactNode
}

const HeaderComponent = styled.header`
    padding-block: 15px;
    margin-block-end: 15px;
`

function Header({ children }: HeaderProps) {
    return (
        <HeaderComponent className={`d-flex justify-content-between align-items-center`}>
            {children}
        </HeaderComponent>
    )
}

export default Header;