
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Hook from '../Hook/Hook';


const LayOut = () => {
    const hookProps = Hook();
    return (
        <div data-theme={`${hookProps.templete ? 'dark' : 'light'}`}>
            <NavBar {...hookProps}></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
           
            
        </div>
    );
};

export default LayOut;