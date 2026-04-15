
import NavBar from './component/NavBar';
import Footer from './component/Footer';
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
