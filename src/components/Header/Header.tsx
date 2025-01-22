import Logo from '@icons/logo.svg'
import Menu from '@icons/menu-variant.svg';
import userIcon from '@images/avatar_small.png'
import { HeaderComponent } from './styles';

function Header() {
    return (
        <>
            <HeaderComponent>
                <img src={Menu} alt="menu icon" height="20px" width="auto" />
                <img src={Logo} alt="logo" height="25px" width="auto" />
                <img src={userIcon} alt="user" height="35px" width="auto"/>
            </HeaderComponent>
        </>
    )
}

export default Header;