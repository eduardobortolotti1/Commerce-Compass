import ProductSwiper from "./ProductSwiper";

interface ProductSwiperProps {
    children: React.ReactNode; // Allows single or multiple children
    style?: React.CSSProperties; // Style of the component
}

function ProductSwiperStyle1({children, style}: ProductSwiperProps) {
    return (
        <ProductSwiper slidesPerView={2} isFreeMode={true} spaceBetween={15} style={style}>
            {children}
        </ProductSwiper>
    );
}

export default ProductSwiperStyle1;
