
import NavBar from '../component/Shared/NavBar';
import Footer from '../component/Shared/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default RootLayout;
