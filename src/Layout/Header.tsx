import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleSidebar } from '../store/features/utilsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Utils } from '../models/Utils'

const Header = () => {
    const sideBarStatus = useSelector((state: Utils) => state.utils.sideBarStatus)
    const dispatch = useDispatch()

    return (
        <>
            <div className='py-4 px-2 border-b-2'>
                <button
                    onClick={() => {
                        dispatch(toggleSidebar())
                    }}
                    className='px-4 rounded-md'>{sideBarStatus ? <FontAwesomeIcon icon={faBars} color='black' /> : <FontAwesomeIcon icon={faBars} color='grey' />}</button>
            </div>
        </>
    )
}

export default Header