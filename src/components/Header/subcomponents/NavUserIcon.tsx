interface NavUserIconProps {
    imageUrl: string
}

function NavUserIcon({ imageUrl }: NavUserIconProps) {
    return (
        <a href="#"><img src={imageUrl} alt="user" height="35px" width="auto" /></a>
    );
}

export default NavUserIcon;