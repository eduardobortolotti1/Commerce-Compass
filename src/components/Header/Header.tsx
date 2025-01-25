import styled from "styled-components";

interface HeaderProps {
    style?: React.CSSProperties
    children?: React.ReactNode
}

const HeaderComponent = styled.header`
    padding-block: 15px;
    margin-block-end: 15px;
`

function Header({ children, style }: HeaderProps) {
    return (
        <HeaderComponent className={`d-flex justify-content-between align-items-center`} style={style}>
            {children}
        </HeaderComponent>
    )
}

export default Header;