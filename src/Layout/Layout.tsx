import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div className='w-full flex flex-row h-screen'>
                <Sidebar />
                <div className='w-full max-mobile:min-w-max max-tablet:min-w-max'>
                    <Header />
                    <div className='bg-slate-100 min-h-max m-4 rounded-lg p-4'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
