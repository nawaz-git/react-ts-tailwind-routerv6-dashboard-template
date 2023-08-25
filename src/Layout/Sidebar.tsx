import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faInbox, faCog, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const sidebarItems = [
        { label: 'Dashboard', icon: faHome },
        { label: 'Team', icon: faUser },
        {
            label: 'Projects',
            icon: faFolder,
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
        { label: 'Settings', icon: faCog },
    ];

    const [showChildrenStates, setShowChildrenStates] = useState<{ [key: string]: boolean }>({});

    const toggleChildrenVisibility = (label: string) => {
        setShowChildrenStates(prevState => ({
            ...prevState,
            [label]: !prevState[label]
        }));
    };

    return (
        <div className='w-1/5 border-r max-mobile:min-w-[75%] max-tablet:min-w-[40%] max-laptop:w-1/3'>
            <div className='px-6 py-4 bg-slate-100'>
                LOGO
            </div>
            {sidebarItems.map((item, index) => (
                <div key={index}>
                    <div
                        className='my-3 mx-4 cursor-pointer px-4 py-3 hover:border-slate-50 border-2 border-slate-100 hover:bg-slate-50 hover:text-slate-700 rounded-md font-medium text-sm flex flex-row'
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