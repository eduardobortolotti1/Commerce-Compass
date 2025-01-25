import styled from "styled-components";

interface ReviewItemImageProps {
    profilePicUrl: string;
    profileId: string;
}

const ReviewItemImageComponent = styled.div`
    width: 40px;
    height: 40px;

    img {
        max-width: 40px;
        max-height: 40px;
        width: auto;
        height: auto;
    }
`;

function ReviewItemImage({ profilePicUrl, profileId }: ReviewItemImageProps) {
    return (
        <ReviewItemImageComponent>
            <a href={`#${profileId}`}><img src={profilePicUrl} alt="Profile picture"/></a>
        </ReviewItemImageComponent>
    );
}

export default ReviewItemImage;