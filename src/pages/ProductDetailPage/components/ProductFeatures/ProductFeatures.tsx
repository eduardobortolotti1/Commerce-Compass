import { ProductItemDetail } from "../../../../types/product";

interface ProductFeaturesProps {
    productItemDetail: ProductItemDetail;
}

function ProductFeatures({ productItemDetail }: ProductFeaturesProps) {
    return (
        <div className="renderedContainer">
            <h3 className="font-16 fw-bold">{productItemDetail.descriptionTitle}</h3>
            <p className="fw-14">{productItemDetail.description_section1}</p>
            <p className="fw-14">{productItemDetail.description_section2}</p>
        </div>
    );
}

export default ProductFeatures;