import Logo from '@icons/logo.svg'
import Menu from '@icons/menu-variant.svg';
import userIcon from '@images/avatar_small.png'
import { HeaderComponent } from './styles';

function Header() {
    return (
        <HeaderComponent className='d-flex justify-content-between align-items-center'>
            <button><img src={Menu} alt="menu icon" height="20px" width="auto" /></button>
            <a href="#Home"><img src={Logo} alt="logo" height="25px" width="auto" /></a>
            <a href="#"><img src={userIcon} alt="user" height="35px" width="auto" /></a>
        </HeaderComponent>
    )
}

export default Header;