import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

const CartWidget = ({numero}) => {
    return (
        <div className='Cart'>
            <FontAwesomeIcon icon={faTrainSubway} />
            <span>{numero}</span>
        </div>
        )
}

export default CartWidget