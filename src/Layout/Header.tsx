import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <>
            <div className='py-4 px-2 border-b-2'>
                <button
                    onClick={() => {
                    }}
                    className='px-4 rounded-md'>{true ? <FontAwesomeIcon icon={faBars} color='black' /> : <FontAwesomeIcon icon={faBars} color='grey' />}</button>
            </div>
        </>
    )
}

export default Header