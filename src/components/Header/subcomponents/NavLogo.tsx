import Logo from '@icons/logo.svg'
import { Link } from 'react-router-dom';

function NavLogo() {
    return (
        <Link to={"/"}><img src={Logo} alt="logo" height="25px" width="auto" /></Link>
    );
}

export default NavLogo;