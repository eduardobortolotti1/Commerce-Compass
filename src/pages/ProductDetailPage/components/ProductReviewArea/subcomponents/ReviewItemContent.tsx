import { Star } from "react-feather";
import styled from "styled-components";

interface ReviewItemContentProps {
    authorName: string;
    stars: number;
    review: string;
}

const StarComponent = styled(Star)`
    width: 16px;
    height: 16px;
    margin: 0px;
`;

const FullStar = styled(StarComponent)`
    color: var(--accent);
    fill: var(--accent);
`;

const EmptyStar = styled(StarComponent)`
    color: var(--grey);
    fill: none;
`;


function ReviewItemContent({ authorName, stars, review }: ReviewItemContentProps) {
    return (
        <div className="d-flex flex-column gap-3 w-100">
            <div className="d-flex flex-column">
                <p className="m-0">{authorName}</p>
                <div className="d-flex gap-1 m-0">{renderStars(stars)}</div>
            </div>
            <p className="lh-sm m-0">{review}</p>
        </div>
    );
}

function renderStars(stars: number) {
    return Array.from({ length: stars }).map((_, index) => (
        <FullStar key={index} />
    ));
}

export default ReviewItemContent;