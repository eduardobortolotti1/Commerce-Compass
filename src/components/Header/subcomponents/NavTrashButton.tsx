import { Trash2 } from "react-feather";

interface NavTrashButtonProps {
    onClick?: () => void
}

function NavTrashButton({ onClick }: NavTrashButtonProps) {
    return (
        <button>
            <Trash2 width="20px" height="20px" onClick={onClick}/>
        </button>
    );
}

export default NavTrashButton;