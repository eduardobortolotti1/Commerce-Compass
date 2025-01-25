// External libraries
import { Search } from 'react-feather';
import styled from 'styled-components';

// Internal components
import Header from '../../components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import InputWithIcon from '../../components/InputWithIcon/InputWithIcon';
import ProductNav from './components/ProductArea/ProductNavBar/ProductNav';

// Header subcomponents
import NavLogo from '../../components/Header/subcomponents/NavLogo';
import NavMenuButton from '../../components/Header/subcomponents/NavMenuButton';
import NavUserIcon from '../../components/Header/subcomponents/NavUserIcon';

// Assets
import userIcon from '@images/avatar_small.png';
import ProductAreaContainer from './components/ProductArea/ProductAreaContainer';
import FetchHeadphones from './components/ProductArea/FetchProducts/FetchHeadphones';
import FetchFeaturedHeadphones from './components/ProductArea/FetchProducts/FetchFeaturedHeadphones';
import FeaturedProductsHeader from './components/ProductArea/FeaturedProductsArea/FeaturedProductsHeader';
import { useState } from 'react';
import FetchHeadsets from './components/ProductArea/FetchProducts/FetchHeadsets';
import FetchFeaturedHeadsets from './components/ProductArea/FetchProducts/FetchFeaturedHeadsets';

const WrapperComponent = styled.div`
    margin: 0 25px 0 25px;
`;

function HomePage() {
    const [activeButton, setActiveButton] = useState<string>("Headphone");

    function changeCategory(name: string) {
        setActiveButton(name);
    }

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
                <ProductNav updateFunction={changeCategory} />
                {activeButton == "Headphone" ? <FetchHeadphones /> : null}
                {activeButton == "Headset" ? <FetchHeadsets /> : null}
                <FeaturedProductsHeader />
                {activeButton == "Headphone" ? <FetchFeaturedHeadphones /> : null}
                {activeButton == "Headset" ? <FetchFeaturedHeadsets /> : null}
            </ProductAreaContainer>
        </>
    )
}

export default HomePage;