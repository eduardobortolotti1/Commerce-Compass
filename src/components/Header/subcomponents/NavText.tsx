interface NavTextProps {
    text: string
}

function NavText({ text }: NavTextProps) {
    return (
        <p className="font-16 fw-bold m-0">{text}</p>
    );
}

export default NavText;