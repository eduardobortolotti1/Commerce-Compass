import styled from "styled-components";

const FormErrorMessageComponent = styled.div`
    padding: 5px;
    background-color: #f8d7da;
    border: 1px solid #ff485b;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
`;

interface FormErrorMessageProps {
    message: string;
}

function FormErrorMessage({ message }: FormErrorMessageProps) {
    return (
        <FormErrorMessageComponent className="w-100">
            <p className="m-0">Error: {message}</p>
        </FormErrorMessageComponent>
    );
}

export default FormErrorMessage;