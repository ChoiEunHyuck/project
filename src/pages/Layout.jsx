import { Outlet } from 'react-router-dom';
import Header from '../sections/header';

export default function Layout() {
    return (
        <div className="mw">
            <Header />
            <Outlet />
        </div>
    );
}
