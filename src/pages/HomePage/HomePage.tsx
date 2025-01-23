// Typescript error (not fixed):
// import Header from '@components/Header/Header';
import Header from '../../components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import { Search } from 'react-feather';
import styled from 'styled-components';
import InputWithIcon from '../../components/InputWithIcon/InputWithIcon';
import ProductArea from './components/ProductArea/ProductArea';
import NavLogo from '../../components/Header/subcomponents/NavLogo';
import NavMenuButton from '../../components/Header/subcomponents/NavMenuButton';
import NavUserIcon from '../../components/Header/subcomponents/NavUserIcon';
import userIcon from '@images/avatar_small.png'


const Wrap = styled.div`
    margin: 0 25px 0 25px;
`;

function HomePage() {
    return (
        <>
            <Wrap>
                <Header>
                    <NavMenuButton />
                    <NavLogo />
                    <NavUserIcon imageUrl={userIcon}/>
                </Header>
                <Welcome />
                <InputWithIcon icon={Search} placeholder='Search Headphone' />
            </Wrap>
            <ProductArea />
        </>
    )
}

export default HomePage;