import { X } from "react-feather";

interface DrawerHeaderProps {
    text: string
    setOpen: (setOpen: boolean) => void
}



function DrawerHeader({ text, setOpen }: DrawerHeaderProps) {
    function handleOnClick() {
        setOpen(false);
    }
    
    return (
        <div className="d-flex w-100 justify-content-between align-items-center">
            <h2 className="m-0 font-24 fw-bold">{text}</h2>
            <button onClick={handleOnClick}>
                <X />
            </button>
        </div>
    );
}

export default DrawerHeader;