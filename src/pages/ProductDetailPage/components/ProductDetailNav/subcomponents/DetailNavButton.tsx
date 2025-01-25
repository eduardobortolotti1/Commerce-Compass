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
    border: none;
    background: transparent;
    cursor: pointer;
`;

const ButtonActive = styled(ButtonInactive)`
    position: relative; /* Ensure ::after is positioned relative to the button */
    &::after {
        position: absolute;
        content: "";
        display: block;
        margin: 0 auto;
        right: 0;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 3px;
        background-color: var(--primary);
        border-radius: 3px;
        transition: width 0.5s ease; /* Smooth transition for width */
    }

    &.active::after {
        animation: expand 0.5s ease forwards; /* Use animation for expand effect */
    }

    @keyframes expand {
        from {
            width: 0%;
        }
        to {
            width: 40%;
        }
    }
`;

function DetailNavButton({ text, isActive, onClick }: ButtonProps) {
    return (
        <ButtonWrapper>
            <ButtonActive onClick={onClick} className={isActive ? "active" : ""}>
                {text}
            </ButtonActive>
        </ButtonWrapper>
    );
}

export default DetailNavButton;
