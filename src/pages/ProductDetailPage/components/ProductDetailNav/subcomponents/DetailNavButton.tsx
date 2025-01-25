import styled from "styled-components";

interface ButtonProps {
    text: string;
    isActive: boolean;
    onClick: () => void; // Accept an onClick function as a prop
}

const ButtonWrapper = styled.div`
    display: inline-flex;
    position: relative;
`;

// Styled components
const ButtonInactive = styled.button`
  padding-block: 3px;
  font-size: 16px;
  border-radius: 30px;
`;

const ButtonActive = styled(ButtonInactive)`
    &::after {
        position: absolute;
        content: "";
        display: block;
        margin: 0 auto;
        right: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: var(--primary);
        border-radius: 3px;
        transition: 1s ease; /* Smooth transition */
    }

    /* Expand the underline when active */
    &.active::after {
        width: 40%; /* Final width for the underline */
    }
`;

// Child component
function DetailNavButton({ text, isActive, onClick }: ButtonProps) {
    return isActive ? (
        <ButtonWrapper>
            <ButtonActive onClick={onClick} className={isActive? "active" : ""}>{text}</ButtonActive>
        </ButtonWrapper>
    ) : (
        <ButtonWrapper>
            <ButtonInactive onClick={onClick}>{text}</ButtonInactive>
        </ButtonWrapper>
    );
}

export default DetailNavButton;