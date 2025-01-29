import styled from "styled-components";

const ButtonWrapper = styled.div`
    width: 100%;
    
    button {
        padding: 15px 25px 15px 25px;
        color: var(--white);
        background-color: var(--primary);
        border-radius: 10px;
        width: 100%;
    }
`;

interface PrimaryButtonProps {
    text: string;
    onClick?: () => void;
    icon?: React.ElementType
    className?: string;
}

function PrimaryButton({ text, onClick, className, icon: IconComponent }: PrimaryButtonProps) {
    return (
        <ButtonWrapper className={`${className}`}>
            <button onClick={onClick} className={`d-flex fw-bold ${IconComponent ? 'justify-content-between align-items-center font-14' : 'justify-content-center'}`}>
                {text}
                {IconComponent && <IconComponent />}
            </button>
        </ButtonWrapper>
    );
}


export default PrimaryButton;