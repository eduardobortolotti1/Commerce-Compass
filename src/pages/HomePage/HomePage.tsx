// Typescript error (not fixed):
// import Header from '@components/Header/Header';
import Header from '../../components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import { Search } from 'react-feather';
import styled from 'styled-components';
import InputWithIcon from '../../components/InputWithIcon/InputWithIcon';
import ProductArea from './components/ProductArea/ProductArea';
import ProductCarousel from './components/ProductArea/Carousels/ProductCarousel';

const Wrap = styled.div`
    margin-inline: 25px;
`;

function HomePage() {
    return (
        <>
            <Wrap>
                <Header />
                <Welcome />
                <InputWithIcon icon={Search} placeholder='Search Headphone' />
            </Wrap>
            <ProductArea />
        </>
    )
}

export default HomePage;