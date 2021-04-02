import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
    >
      Check Out
      <FontAwesomeIcon icon={faArrowRight} className="w-4 ml-2 inline-flex" />
    </a>
  )
}

export default CheckOutButton
