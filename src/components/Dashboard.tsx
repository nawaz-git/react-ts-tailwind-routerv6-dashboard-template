import React, { ReactNode } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

interface DashboardProps {
    children?: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    return (
        <div>
            <div className='w-full flex flex-row h-screen'>
                <Sidebar />
                <div className='w-full max-mobile:min-w-max max-tablet:min-w-max'>
                    <Header />
                    <div className='bg-slate-100 min-h-max m-4 rounded-lg'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
