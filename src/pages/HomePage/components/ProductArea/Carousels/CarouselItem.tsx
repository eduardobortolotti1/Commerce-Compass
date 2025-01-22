import { ArrowRight } from "react-feather"
import styled from "styled-components"
import CarouselItemRow from "./CarouselItemRow"
import CarouselItemImage from "./CarouselItemImage"
import Headphone from "@images/headphone.png"
import CarouselItemText from "./CarouselItemText"

const CarouselItemComponent = styled.div`
    width: 100%;
    height: 180px;
    background-color: var(--white);
    border-radius: 10px;
    transform: scale(0.95); /* Scales down the content */
    transform-origin: center; /* Keeps the content centered */
    `

// interface Props {
//     name: string,
//     imageUrl: string,
//     id: string
// }

function CarouSelItem() {
    return (
        <CarouselItemComponent>
            <CarouselItemRow>
                <CarouselItemText>
                    <h2 className="fw-bold font-22">
                        TMA-2
                        Modular
                        Headphone
                    </h2>
                    <button className="d-flex gap-2 color-primary fw-bold font-14">
                        Shop Now
                        <ArrowRight />
                    </button>
                </CarouselItemText>
                
                <CarouselItemImage>
                    <img src={Headphone} alt="headphone" draggable="false" height="100%" />
                </CarouselItemImage>
            </CarouselItemRow>

        </CarouselItemComponent>
    )
}

export default CarouSelItem