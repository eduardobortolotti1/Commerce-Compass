interface CarouselItemTextProps {
    children: React.ReactNode; // This allows any JSX content to be passed as children
}

function CarouselItemText({ children }: CarouselItemTextProps) {
    return (
        <div className="col-6 h-100 d-flex flex-column gap-4">
            {children}
        </div>
    )
}

export default CarouselItemText;