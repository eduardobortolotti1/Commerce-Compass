import { X } from "react-feather";

interface DrawerHeaderProps {
    text: string
}



function DrawerHeader({ text }: DrawerHeaderProps) {
    return (
        <div className="d-flex w-100 justify-content-between align-items-center">
            <h2 className="m-0 font-24 fw-bold">{text}</h2>
            <button>
                <X />
            </button>
        </div>
    );
}

export default DrawerHeader;