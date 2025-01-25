// External libraries
import { Search } from 'react-feather';
import styled from 'styled-components';

// Internal components
import Header from '../../components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import InputWithIcon from '../../components/InputWithIcon/InputWithIcon';
import ProductSwiper from '../../components/ProductSwiper/ProductSwiper';
import FeaturedProductsArea from './components/ProductArea/FeaturedProductsArea/FeaturedProductsArea';
import ProductNav from './components/ProductArea/ProductNavBar/ProductNav';

// Header subcomponents
import NavLogo from '../../components/Header/subcomponents/NavLogo';
import NavMenuButton from '../../components/Header/subcomponents/NavMenuButton';
import NavUserIcon from '../../components/Header/subcomponents/NavUserIcon';

// Assets
import userIcon from '@images/avatar_small.png';
import Headphone from '@images/headphone.png';
import Cables from "@images/cable.png"
import ProductBannerItem from './components/ProductArea/Carousels/ProductCarousel/ProductBannerItem';
import FeaturedProductItem from './components/ProductArea/FeaturedProductsArea/FeaturedProductItem';
import ProductAreaContainer from './components/ProductArea/ProductAreaContainer';


const WrapperComponent = styled.div`
    margin: 0 25px 0 25px;
`;

function HomePage() {
    return (
        <>
            <WrapperComponent>
                <Header>
                    <NavMenuButton />
                    <NavLogo />
                    <NavUserIcon imageUrl={userIcon} />
                </Header>
                <Welcome />
                <InputWithIcon icon={Search} placeholder='Search Headphone' />
            </WrapperComponent>
            <ProductAreaContainer>
                <ProductNav />
                <ProductSwiper>
                    <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
                    <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
                    <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
                </ProductSwiper>
                <FeaturedProductsArea>
                    <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                    <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                    <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                    <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                    <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                    <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                </FeaturedProductsArea>
            </ProductAreaContainer>

        </>
    )
}

export default HomePage;