import styled from "styled-components"

const IntroComponent = styled.div`
    margin-block-end: 160px;
    margin-block-start: 100px;
`;

function Intro() {
    return (
        <IntroComponent className="intro mx-auto w-100">
            <h1 className='font-50 fw-bold color-white'>Audio</h1>
            <p className='font-14 fw-bold color-white'>It's modular and designed to last</p>
        </IntroComponent>
    )
}

export default Intro