import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faInbox, faCog, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Utils } from "../models/Utils";

const Sidebar = () => {
    const location = useLocation();
    const sideBarStatus = useSelector((state: Utils) => state.utils.sideBarStatus)

    const sidebarItems = [
        { label: 'Dashboard', icon: faHome, path: '' },
        { label: 'Team', icon: faUser },
        {
            label: 'Projects',
            icon: faFolder,
            path: 'projects',
            childrens: [
                { label: 'Client', icon: faUser },
            ]
        },
        {
            label: 'Inbox',
            icon: faInbox,
            childrens: [
                { label: 'Draft', icon: faInbox },
            ]
        },
        {
            label: 'Settings',
            icon: faCog
        },
    ];

    const [showChildrenStates, setShowChildrenStates] = useState<{ [key: string]: boolean }>({});

    const toggleChildrenVisibility = (label: string) => {
        setShowChildrenStates(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }));
    };

    return (
        sideBarStatus &&
        <div className='w-1/5 border-r max-mobile:min-w-[75%] max-tablet:min-w-[40%] max-laptop:w-1/3'>
            <div className='px-6 py-4 bg-slate-100'>
                LOGO
            </div>
            {sidebarItems.map((item, index) => (
                <div key={index}>
                    <NavLink
                        to={`/${item.path ? item.path : ''}`}
                    >
                        <div
                            className={`my-3 mx-4 cursor-pointer px-4 py-3
                            hover:border-slate-50 border-2 border-slate-100 hover:bg-slate-50 hover:text-slate-700
                             rounded-md font-medium text-sm flex flex-row
                            ${location.pathname === `/${item.path}` ? 'bg-slate-100' : ''}
                             `}
                            onClick={() => {
                                if (item.childrens) {
                                    toggleChildrenVisibility(item.label)
                                }
                            }}
                        >
                            <div>
                                <FontAwesomeIcon icon={item.icon} color="grey" className="mr-3" />
                                {item.label}
                            </div>
                            {item.childrens && (
                                <FontAwesomeIcon
                                    icon={showChildrenStates[item.label] ? faCaretUp : faCaretDown}
                                    className="ml-auto self-center"
                                    color="grey"
                                />
                            )}
                        </div>
                    </NavLink>
                    {
                        item.childrens && showChildrenStates[item.label] && item.childrens.map((citem) => (
                            <div
                                key={citem.label}
                                className='my-3 ml-7 mr-4 cursor-pointer px-4 py-3 hover:border-slate-50 border-2 border-slate-100 hover:bg-slate-50 hover:text-slate-700 rounded-md font-medium text-sm'
                            >
                                <FontAwesomeIcon icon={citem.icon} color="grey" className="mr-3" />
                                {citem.label}
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    );
};

export default Sidebar